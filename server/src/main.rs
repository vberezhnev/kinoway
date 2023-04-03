#[allow(unused)]
#[macro_use]
extern crate rocket;

use firebase::Firebase;
use rocket_contrib::json::Json;
use serde::{Deserialize, Serialize};

use dotenv::dotenv;
use std::env;

#[derive(Debug, Serialize, Deserialize)]
struct User {
    id: String,
    email: String,
    password: String,
    movie_list_id: String,
}

#[derive(Debug, Serialize, Deserialize)]
struct MovieList {
    id: String,
    movie_ids: Vec<String>,
}

#[post("/register")]
fn register_user(conn: DbConn, form: Form<RegistrationForm>) -> Result<Json<User>, String> {
    let user_id = Uuid::new_v4().to_string();

    let new_user = User {
        id: user_id.clone(),
        email: form.email.clone(),
        password: form.password.clone(),
        movie_list_id: Uuid::new_v4().to_string(),
    };

    conn.collection("users")
        .document(&user_id)
        .set(&new_user)
        .map_err(|e| format!("Failed to create user: {:?}", e))?;

    Ok(Json(new_user))
}

#[post("/login")]
fn login_user(conn: DbConn, form: Form<LoginForm>) -> Result<Json<User>, String> {
    let query = conn
        .collection("users")
        .r#where("email", "==", &form.email)
        .r#where("password", "==", &form.password)
        .limit(1);

    let mut result = query
        .get()
        .map_err(|e| format!("Failed to get user: {:?}", e))?;

    let user = result
        .documents()
        .next()
        .map(|d| d.data().unwrap().clone())
        .ok_or_else(|| "User not found".to_string())?;

    Ok(Json(user))
}

#[post("/favorite_movies")]
fn save_favorite_movies(conn: DbConn, form: Form<FavoriteMoviesForm>) -> Result<(), String> {
    let user_id = form.user_id.clone();

    let query = conn
        .collection("users")
        .document(&user_id)
        .get()
        .map_err(|e| format!("Failed to get user: {:?}", e))?;

    let mut user = query
        .data()
        .map(|d| serde_json::from_value(d.clone()).unwrap())
        .ok_or_else(|| "User not found".to_string())?;

    let movie_list_id = Uuid::new_v4().to_string();

    let new_movie_list = MovieList {
        id: movie_list_id.clone(),
        movie_ids: form.movie_ids.clone(),
    };

    conn.collection("movie_lists")
        .document(&movie_list_id)
        .set(&new_movie_list)
        .map_err(|e| format!("Failed to create movie list: {:?}", e))?;

    user.movie_list_id = movie_list_id.clone();

    conn.collection("users")
        .document(&user_id)
        .set(&user)
        .map_err(|e| format!("Failed to update user: {:?}", e))?;

    Ok(())
}

#[get("/movies")]
fn get_movies(conn: DbConn, user: AuthenticatedUser) -> Json<Vec<Movie>> {
    let movie_list_id = user.movie_list_id.clone().unwrap();

    let movie_list_query = conn
        .collection("movie_lists")
        .document(&movie_list_id)
        .get()
        .expect("Failed to get movie list");

    let movie_list_data = movie_list_query
        .data()
        .expect("Failed to get movie list data");

    let movie_list: MovieList = serde_json::from_value(movie_list_data.clone()).unwrap();

    let mut movies = Vec::new();

    for movie_id in movie_list.movie_ids {
        let movie_query = conn
            .collection("movies")
            .document(&movie_id)
            .get()
            .expect("Failed to get movie");

        let movie_data = movie_query.data().expect("Failed to get movie data");

        let movie: Movie = serde_json::from_value(movie_data.clone()).unwrap();

        movies.push(movie);
    }

    Json(movies)
}

// #[get("/movies")]
// #[guard(Auth)]
// fn get_movies(conn: DbConn, user: AuthenticatedUser) -> Json<Vec<Movie>> {
//     //...
// }

fn main() {
    dotenv().ok();

    let api_key = env::var("FIREBASE_API_KEY").unwrap();
    let project_id = env::var("FIREBASE_PROJECT_ID").unwrap();
    let auth_domain = env::var("FIREBASE_AUTH_DOMAIN").unwrap();
    let database_url = env::var("FIREBASE_DATABASE_URL").unwrap();

    let firebase = Firebase::new(project_id, "SERVICE_ACCOUNT_KEY_PATH").unwrap();

    rocket::ignite()
        .manage(firebase)
        .mount(
            "/",
            routes![register_user, login_user, save_favorite_movies],
        )
        .launch();
}
