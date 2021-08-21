package dev.shibasispatnaik.listen_sql

import io.vertx.core.AbstractVerticle
import io.vertx.core.Promise

class MainVerticle : AbstractVerticle() {

  override fun start(startPromise: Promise<Void>) {
    vertx
      .createHttpServer()
      .requestHandler { req ->
        req.response()
          .putHeader("content-type", "text/plain")
          .end("Hello from Vert.x!")
      }
      .listen(80) { http ->
        if (http.succeeded()) {
          startPromise.complete()
          println("HTTP server started on port 80")
        } else {
          startPromise.fail(http.cause());
        }
      }
  }
}
