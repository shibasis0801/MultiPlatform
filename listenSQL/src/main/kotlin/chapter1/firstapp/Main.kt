package chapter1.firstapp

import io.vertx.core.Vertx


var connectionCount = 0
val prompt = { "We now have $connectionCount connections." }

fun main() {
  val vertx = Vertx.vertx()
  vertx.createNetServer()
    .connectHandler { socket ->
      connectionCount++

      socket.handler { buffer ->
        socket.write(buffer)
        if (buffer.toString().endsWith("/quit\n")) {
          socket.close()
        }
      }

      socket.closeHandler {
        connectionCount--
      }
    }
    .listen(3000)


  vertx.setPeriodic(5000) {
    println(prompt())
  }

  vertx.createHttpServer()
    .requestHandler { request ->
      val response = request.response()
      response.end(prompt())
    }.listen(8080)
}
