import * as S from './style'

const Card = () => {
  return(
    <li>
      <S.Card>
        <header>
            <h4>Ricardo Moreira Gomes</h4>
            <div>
              <button className='red'>Excuir</button>
              <button>Editar</button>
            </div>
        </header>
        <p>ricomoreira14@gmail.com</p>
        <p>(31) 9 7504-0414</p>
        <a href="#" target='_blank'>https://Meusite.com.br</a>
        <p>Rua Radialista 44, Contagem - MG</p>
      </S.Card>
    </li>
  )
}

export default Card
