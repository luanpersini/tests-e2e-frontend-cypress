import { useFetch } from 'src/common/adapters/ReactQueryAdapter'
import { apiPaths } from 'src/common/path/apiPath'
import { UserParams } from '../interfaces/User'

export const useGetUserById = (id: string) => useFetch<UserParams>(apiPaths.users.basePath + id)

export const useGetUsers = () => {
  const useQuery = () => useFetch<UserParams[]>(apiPaths.users.basePath)

  const query = useQuery()

  const listUsers = () => {
    if (query.data) {      
      return query.data
    }    
    return []
  }

  return { listUsers }
}
