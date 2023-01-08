use actix_web::{web, App, HttpResponse, HttpServer};
use actix_web_httpauth::extractors::bearer::{BearerAuth, Config};
use jsonwebtoken::{decode, DecodingKey, Validation};
use std::time::SystemTime;

#[derive(Debug, Serialize, Deserialize)]
struct Claims {
   sub: String,
   company: String
}

async fn protected_route(bearer: BearerAuth) -> HttpResponse {
    // Extract the JWT from the Authorization header
    let token = bearer.token();

    // Validate the JWT and decode it
    let validation = Validation::default();
    let secret = "secret".as_ref();
    let decoding_key = DecodingKey::from_secret(secret);
    let token_data = match decode::<Claims>(&token, &decoding_key, &validation) {
        Ok(c) => c.claims,
        Err(_) => return HttpResponse::Unauthorized().finish(),
    };

    // Check if the token is valid and has not expired
    if token_data.exp > SystemTime::now().timestamp() {
        HttpResponse::Ok().body("Welcome!")
    } else {
        HttpResponse::Unauthorized().finish()
    }
}

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        let auth_config = Config::default()
            .realm("Protected Area")
            .max_age(3600);

        App::new()
            .wrap(actix_web_httpauth::middleware::HttpAuthentication::bearer(auth_config))
            .route("/protected", web::get().to(protected_route))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
