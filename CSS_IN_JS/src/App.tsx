import { ThemeProvider } from 'styled-components'

import ListaVagas from './componentes/containers/ListadeVagas'

import themeOrigin from './componentes/containers/Themes/origin'

import Cabecalho from './componentes/cabecalho'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <ThemeProvider theme={themeOrigin}>
      <EstiloGlobal />
      <Cabecalho />

      <Container>
        <ListadeVagas />
      </containers>
    </ThemeProvider>
  )
}

export default App