// App.tsx
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import Header from './components/header';
import Produtos from './containers/Produtos';
import { GlobalStyle } from './store/styles';
import { store } from './store';
import { Produto } from './components/Produto/types';

function App() {
  const [favoritos, setFavoritos] = useState([] as Produto[]);

  function favoritar(produto: Produto) {
    if (favoritos.find((p) => p.id === produto.id)) {
      const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id);
      setFavoritos(favoritosSemProduto);
    } else {
      // Adicione a propriedade 'favoritos' ao produto antes de adicioná-lo aos favoritos
      const produtoComFavoritos = { ...produto, favoritos: true };
      setFavoritos([...favoritos, produtoComFavoritos]);
    }
  }
  
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} />
        <Produtos favoritos={favoritos} favoritar={favoritar} />
      </div>
    </Provider>
  );
}

export default App;



