import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Apresentacao from '../../components/Apresentacao';
import FoodList from '../../components/FoodList';
import Footer from '../../components/Footer';
import { useGetRestaurantSelectedQuery } from '../../services/api';
import Cart from '../../components/Cart';
import Loader from '../../components/Loader';

// Define RestaurantParams como um tipo com id do restaurante
type RestaurantParams = {
  id: string;
};

const Perfil = () => {
  // Recupera o parâmetro de rota (id)
  const { id } = useParams<RestaurantParams>();

  // Faz a requisição de dados usando a API
  const { data: restaurantFood, isLoading } = useGetRestaurantSelectedQuery(
    id || ''
  );

  // Exibe o loader enquanto os dados estão carregando
  if (isLoading) {
    return <Loader />;
  }

  // Verifica se os dados do restaurante foram carregados
  if (restaurantFood) {
    return (
      <>
        <Header />
        <Apresentacao restaurant={restaurantFood} />
        <FoodList
          restaurant={restaurantFood}
          pedido={{
            id: 0,
            nome: '',
            foto: '',
            preco: 0,
          }}
        />
        <Footer />
        <Cart />
      </>
    );
  }

  // Mensagem caso o restaurante não seja encontrado
  return <div>Restaurante não encontrado</div>;
};

export default Perfil;
