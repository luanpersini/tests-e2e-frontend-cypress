import { HttpClient } from "../../../interfaces/http-client"
import { HttpDecorator } from "./httpDecorator"
import { LogMongoRepository } from "../../log/log-mongo-repository"

export const makeHttpDecorator = (httpClient: HttpClient): HttpClient => {
  const logMongoRepository = new LogMongoRepository()
  return new HttpDecorator(httpClient, logMongoRepository)
}
