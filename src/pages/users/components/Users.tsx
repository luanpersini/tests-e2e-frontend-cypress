import navigationPath from 'src/common/path/navigationPath'
import { CustomTable } from 'src/components/elements/CustomTable'
import { ListWrapper } from 'src/components/elements/ListWrapper'
import { PageTitle } from '../../../components/template/page-title'
import { Page } from '../../../interfaces/page'
import { useGetUsers } from '../api/useGetUsers'

export function Users(props: Page) {  
  const headers = ['Name', 'Email', 'Zipcode']
  const lines = ['name', 'email', 'zipCode']
  const { listUsers } = useGetUsers()
  const users = listUsers()

  return (
    <div>
      <PageTitle title={props.title} />     
      <ListWrapper isLoading={false} data={users}>
        <CustomTable headers={headers} lines={lines} editkey={'id'} editLink={navigationPath.users.edit} data={users} tablestyle={'table-striped'} headerstyle={'table-dark'} />
      </ListWrapper>
    </div>
  )
}
