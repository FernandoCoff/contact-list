import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCard, editCard } from '../store/reducers/list'
import * as S from './style'
import type { RootReducer } from '../store'


const Create = () => {

  const { items } = useSelector((state : RootReducer) => state.List)

  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [website, setWebsite] = useState('')
  const [adress, setAdress] = useState('')
  const [id, setId] = useState(2)

  const add = () => {
    dispatch(addCard({adress, website, email, id, name, number}))
    setName('')
    setEmail('')
    setNumber('')
    setWebsite('')
    setAdress('')
    setId(id+1)
  }

  const cancell = () =>{
    setName('')
    setEmail('')
    setNumber('')
    setWebsite('')
    setAdress('')
  }

  const edit = () =>{
    items.forEach(card => {
      if(number === card.number){
        const {name, email, adress, id, website} = card
        setName(name)
        setEmail(email)
        setAdress(adress)
        setWebsite(website)
        setId(id)
      }
    })
  }

useEffect(edit, [number])

  return(
    <S.Create>
      <h2 className='subtitle'>Novo Contato</h2>
      <form>
        <div>
          <label htmlFor="name">Nome Completo</label>
          <input type="text" placeholder='Nome Completo' id='name' value={name} onChange={({target})=> setName(target.value)}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Email' id='email' value={email} onChange={({target})=> setEmail(target.value) }/>
        </div>
        <div>
          <label htmlFor="tel">Telefone</label>
          <input type="tel" placeholder='Telefone' id='tel'value={number} onChange={({target})=> setNumber(target.value) }/>
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <input type="text" placeholder='Website' id='website' value={website} onChange={({target})=> setWebsite(target.value) }/>
        </div>
        <div>
          <label htmlFor="adress">Endereço</label>
          <input type="text" placeholder='Endereço' id='adress' value={adress} onChange={({target})=> setAdress(target.value) }/>
        </div>
        <div className='btn'>
          <button onClick={(e)=>{
            e.preventDefault()
            const cardExistente = items.find(card => card.number === number);
            if (cardExistente) {
              dispatch(editCard({
                id: cardExistente.id,
                card: { name, email, number, website, adress, id: cardExistente.id }
              }))
              setName('')
              setEmail('')
              setNumber('')
              setWebsite('')
              setAdress('')
            } else {
              add()
            }}} >Salvar</button>
          <button onClick={(e)=>{e.preventDefault(); cancell()}} className='red'>Cancelar</button>
        </div>
      </form>
    </S.Create>
  )
}

export default Create
