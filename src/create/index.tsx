import * as S from './style'

const Create = () => {

  return(
    <S.Create>
      <h2 className='subtitle'>Novo Contato</h2>
      <form>
        <div>
          <label htmlFor="name">Nome Completo</label>
          <input type="text" placeholder='Nome Completo' id='name'/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Email' id='email'/>
        </div>
        <div>
          <label htmlFor="tel">Telefone</label>
          <input type="tel" placeholder='Telefone' id='tel'/>
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <input type="text" placeholder='Website' id='website'/>
        </div>
        <div>
          <label htmlFor="adress">Endereço</label>
          <input type="text" placeholder='Endereço' id='adress'/>
        </div>
        <div className='btn'>
          <button>Salvar</button>
          <button className='red'>Cancelar</button>
        </div>
      </form>
    </S.Create>
  )
}

export default Create
