import { useSelector } from 'react-redux'
import * as S from './style'
import type { RootReducer } from '../store'
import Card from '../card'

const List = () => {

  const { items } = useSelector((state : RootReducer) => state.List)

  return(
    <S.List>
      <h1>Lista de Contatos</h1>
      <ul>
        {
          items.map( i => (
            <li key={i.id}>
              <Card name={i.name} adress={i.adress} email={i.email} number={i.number} website={i.website} id={i.id}/>
            </li>
          ))
        }
      </ul>
    </S.List>
  )
}

export default List
