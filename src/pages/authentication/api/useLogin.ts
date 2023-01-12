import { usePost } from 'src/common/adapters/ReactQueryAdapter'
import { apiPaths } from 'src/common/path/apiPath'
import { LoginParams } from '../interfaces/Authentication'

export const useLogin = () => {
  const useQuery = (data: LoginParams | undefined) => usePost<LoginParams, LoginParams>(apiPaths.authentication.login, { ...data })

  const mutation = useQuery(undefined)

  const login = async (data: LoginParams) => {
    return await mutation.mutateAsync(data)
  }

  return { login }
}
