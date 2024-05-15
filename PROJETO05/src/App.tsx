import { Provider } from 'react-redux'
import ListaDeContatos from './Containers/ListaDeContatos'
import store from './store'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App