import { usePost } from 'src/common/adapters/ReactQueryAdapter'
import { apiPaths } from 'src/common/path/apiPath'
import { SignupParams } from '../interfaces/Signup'

export const useSignup = () => {
  const useQuery = (data: SignupParams | undefined) => usePost<SignupParams, SignupParams>(apiPaths.authentication.signup, { ...data })

  const mutation = useQuery(undefined)

  const signup = async (data: SignupParams) => {
    return await mutation.mutateAsync(data)
  }

  return { signup }
}
