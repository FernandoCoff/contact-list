import Container from './container'
import Create from './create'
import List from './list'


const App = ()=> (
  <Container childrenOne={<Create/>} childrenTwo={<List/>} />
)

export default App
