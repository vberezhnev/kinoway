use actix_web_httpauth::extractors::AuthenticationError;
use actix_web_httpauth::extractors::basic::{BasicAuth, Config};
use actix_web_httpauth::middleware::HttpAuthentication;
use actix_web::{get, web, App, HttpServer, Error, Responder, dev::ServiceRequest};

use dotenv::dotenv;
use std::env;

async fn index() -> impl Responder {
    HttpResponse::Ok()
        .content_type("text/html; charset=utf-8")
        .body("<h1>Home</h1>")
}

async fn login_route() -> Result<HttpResponse> {
    Ok(HttpResponse::build(StatusCode::OK)
        .content_type("text/html; charset=utf-8")
        .body("<h1>Login</h1>"))
}

async fn registration_route() -> Result<HttpResponse> {
    Ok(HttpResponse::build(StatusCode::OK)
        .content_type("text/html; charset=utf-8")
        .body("<h1>Registration</h1>"))
}

async fn not_found() -> Result<HttpResponse> {
    Ok(HttpResponse::build(StatusCode::OK)
        .content_type("text/html; charset=utf-8")
        .body("<h1>404 Not Found</h1>"))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();

    for (key, value) in env::vars() {
        println!("{}: {}", key, value);
    }

    // let db_name = std::env::var("DB_PASSWORD");
    println!("{:?}", env::vars());

    HttpServer::new(|| {
        App::new()
            .service(web::resource("/").route(web::get().to(index)))
            .service(web::resource("/login").route(web::get().to(login_route)))
            .service(web::resource("/registration").route(web::get().to(registration_route)))
            .default_service(web::route().to(not_found))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
