import { AxiosHttpAdapter } from './AxiosHttpAdapter'
import { makeHttpDecorator } from './httpDecorator/httpDecoratorFactory'

const httpClient = (): AxiosHttpAdapter => {
  const httpClient = new AxiosHttpAdapter()
  return makeHttpDecorator(httpClient)
}

export default httpClient()

