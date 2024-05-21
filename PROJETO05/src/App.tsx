import { Provider } from 'react-redux'
import ListaDeContatos from './containers/ListadeContatos/index'
import store from './store'
import EstiloGlobal from './containers/ListadeContatos'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <ListaDeContatos />
    </Provider>
  )
}

export default App
// App.tsx

// Remova o caractere de quebra de linha na linha 16
