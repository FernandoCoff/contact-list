import * as S from './style'
import { useDispatch } from 'react-redux'
import { removeCard } from '../store/reducers/list'

type Props = {
  name : string,
  email : string,
  number : string,
  website : string,
  adress : string,
  id: number
}

const Card = ({ name, email, number, website, adress, id} : Props) => {
  const dispatch = useDispatch()

  return(
      <S.Card>
        <header>
            <h4>{name}</h4>
            <div>
              <button className='red' onClick={()=>{dispatch(removeCard(id))}}>Excuir</button>
            </div>
        </header>
        <p>{email}</p>
        <p>{number}</p>
        <a href={website} target='_blank'>{website}</a>
        <p>{adress}</p>
      </S.Card>
  )
}

export default Card
