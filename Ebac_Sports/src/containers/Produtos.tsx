import Produto from '../components/Produto';
import { useGetProdutoQuery } from '../services/api';
import * as S from './styles';
import { Produto as ProdutoType } from '../App';

type Props = {
  favoritos: ProdutoType[];
  favoritar: (produto: ProdutoType) => void;
};

const ProdutosComponent = ({ favoritos, favoritar }: Props) => {
  const { data: produtos, isLoading, error } = useGetProdutoQuery();

  console.log('Produtos:', produtos);

  if (isLoading) return <h2>Carregando Produtos...</h2>;
  if (error) return <h2>Ocorreu um erro ao carregar os produtos.</h2>;

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id;
    const idsDosFavoritos = favoritos.map((f) => f.id);

    return idsDosFavoritos.includes(produtoId);
  };

  return (
    <S.Produtos>
      {Produto.map((produto) => (
        <Produto
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          key={String(produto.id)} // Garante que a chave seja uma string
          produto={produto}
          favoritar={favoritar}
        />
      ))}
    </S.Produtos>
  );
};

export default ProdutosComponent;
