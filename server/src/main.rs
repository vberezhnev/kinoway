use actix_web::{dev::ServiceRequest, get, web, App, Error, HttpServer, Responder};
#[allow(unused_imports)]
use actix_web_httpauth::extractors::bearer::{BearerAuth, Config};
use actix_web_httpauth::extractors::AuthenticationError;
use actix_web_httpauth::middleware::HttpAuthentication;

use dotenv::dotenv;
use std::env;

// #[get("/{id}/{name}/index.html")]
async fn index(info: web::Path<(u32, String)>) -> impl Responder {
    format!("Hello {}! id:{}", info.1, info.0)
}

async fn basic_auth_validator(
    req: ServiceRequest,
    credentials: BasicAuth,
) -> Result<ServiceRequest, Error> {
    let config = req
        .app_data::<Config>()
        .map(|data| data.get_ref().clone())
        .unwrap_or_else(Default::default);
    match validate_credentials(
        credentials.user_id(),
        credentials.password().unwrap().trim(),
    ) {
        Ok(res) => {
            if res == true {
                Ok(req)
            } else {
                Err(AuthenticationError::from(config).into())
            }
        }
        Err(_) => Err(AuthenticationError::from(config).into()),
    }
}

fn validate_credentials(user_id: &str, user_password: &str) -> Result<bool, std::io::Error> {
    if (user_id.eq("karl") && user_password.eq("password")) {
        return Ok(true);
    }
    return Err(std::io::Error::new(
        std::io::ErrorKind::Other,
        "Authentication failed!",
    ));
}

async fn bearer_auth_validator(
    req: ServiceRequest,
    credentials: BearerAuth,
) -> Result<ServiceRequest, Error> {
    let config = req
        .app_data::<Config>()
        .map(|data| data.get_ref().clone())
        .unwrap_or_else(Default::default);
    match validate_token(credentials.token()) {
        Ok(res) => {
            if res == true {
                Ok(req)
            } else {
                Err(AuthenticationError::from(config).into())
            }
        }
        Err(_) => Err(AuthenticationError::from(config).into()),
    }
}

fn validate_token(str: &str) -> Result<bool, std::io::Error> {
    if (str.eq("a-secure-token")) {
        return Ok(true);
    }
    return Err(std::io::Error::new(
        std::io::ErrorKind::Other,
        "Authentication failed!",
    ));
}

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(move || {
        let auth = HttpAuthentication::bearer(bearer_auth_validator);
        App::new()
            .wrap(auth)
            //.data(pool.clone())
            .route("/{id}/{name}/index.html", web::get().to(index))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
