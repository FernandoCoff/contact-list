import { Provider } from 'react-redux'
import store from './store'
import Container from './container'
import Create from './create'
import List from './list'


const App = ()=> (
  <Provider store={store}>
    <Container childrenOne={<Create/>} childrenTwo={<List/>} />
  </Provider>
)

export default App
