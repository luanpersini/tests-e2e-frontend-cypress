import { NavigationLink } from './NavigationLink'

interface Props {
  headers: string[]
  lines: string[]
  data: unknown[]
  editkey?: string
  editLink?: string
  tablestyle?: string
  headerstyle?: string
}
export const CustomTable = ({ headers, lines, data, editkey = undefined, editLink = undefined, tablestyle, headerstyle = '' }: Props) => {
  return (
    <table className={'table ' + tablestyle}>
      <thead className={headerstyle}>
        <tr>
          {headers.map((header, key) => (
            <th key={key} scope="col">
              {header}
            </th>
          ))}
          {editkey && <th>#</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((lineData: any, key) => (
          <tr key={key}>
            {lines.map((line, key) => (
              <td key={key}>{lineData[line]}</td>
            ))}
            {editkey && (
              <td key={key}>
                <NavigationLink to={editLink + lineData[editkey]}>Edit</NavigationLink>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
