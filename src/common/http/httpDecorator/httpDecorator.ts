import { HttpClient, HttpRequest, HttpResponse } from '../../../interfaces/http-client';

import { LogErrorRepository } from '../../log/log-error-repository';
import { httpUnexpectedErrorHandler } from './httpUnexpectedErrorHandler';

export class HttpDecorator implements HttpClient {
  
  constructor (
    private readonly httpClient: HttpClient,
    private readonly logErrorRepository: LogErrorRepository
  ) {}

  async request(httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.httpClient.request(httpRequest)
    if (httpResponse.statusCode === 500) {     
      await this.logErrorRepository.logError(httpResponse.body) 
      await httpUnexpectedErrorHandler(httpResponse)   
    }    
    return httpResponse
  }
}
