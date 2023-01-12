import 'react-toastify/dist/ReactToastify.css'

import { toast } from 'react-toastify'
import { errorMessages } from 'src/common/errors/error-messages'
import { UnexpectedError } from 'src/common/errors/unexpected-error'
import { HttpResponse, HttpStatusCode } from '../../../interfaces/http-client'

export async function httpUnexpectedErrorHandler( httpResponse: HttpResponse): Promise<void> {
    const statusCode = httpResponse.statusCode
    if (statusCode === HttpStatusCode.serverError) {       
      toast.error(errorMessages.UnexpectedError)    
      throw new UnexpectedError()      
    }  
}
