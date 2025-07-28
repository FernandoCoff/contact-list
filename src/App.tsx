import { Provider } from 'react-redux'
import store from './store'
import Container from './container'
import Create from './create'
import List from './list'


const App = ()=>{
  alert('Para editar, basta ecrever no campo numero, um numero já existente!')
  return(
    <Provider store={store}>
    <Container childrenOne={<Create/>} childrenTwo={<List/>} />
    </Provider>
  )
}


export default App
