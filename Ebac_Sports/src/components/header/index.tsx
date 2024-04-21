import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';
import { Produto } from '../../store/App'; // Corrigido o caminho de importação
import { paraReal } from '../Produto';
import cesta from '../../assets/cesta.png'; // Corrigido o caminho de importação

import { RootReducer } from '../../store';

type Props = {
  favoritos: Produto[];
}

const Header = ({ favoritos }: Props) => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens);
  const valorTotal = itens.reduce((acc, item) => {
    // Garante que acc é um número
    acc = typeof acc === 'number' ? acc : 0;
    acc += item.preco;
    return acc;
  }, 0);

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Cesta" /> {/* Corrigido o src para utilizar a variável cesta */}
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  );
}

export default Header;
