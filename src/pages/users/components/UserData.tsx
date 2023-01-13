
import { useParams } from 'react-router-dom';
import { Input } from 'src/components/form';
import { PageTitle } from '../../../components/template/page-title';
import { Page } from '../../../interfaces/page';
import { useGetUserById } from '../api/useGetUsers';

export function UserData(props: Page) {
  const params = useParams()
  const id = params.id ?? ''
  
  const userQuery = useGetUserById(id)
  const data = userQuery.data
  if (!data) return null
  return (
    <div>
      <PageTitle title={props.title} />
      <Input
          name="name"
          label="Name"
          inputvalue={data}
        />      
    </div>
  )
}
