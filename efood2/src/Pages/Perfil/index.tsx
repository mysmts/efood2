import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Apresentacao from '../../components/Apresentacao'
import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'
import { useGetRestaurantSelectedQuery } from '../../services/api'
import Cart from '../../components/Cart'
import Loader from '../../components/Loader'

// Define RestaurantParams como um Record para satisfazer as restrições de useParams
type RestaurantParams = {
  id: string
}

const Perfil = () => {
  // useParams retorna um objeto de parâmetros da rota
  const { id } = useParams<RestaurantParams>()

  // Verificamos se o ID existe antes de fazer a requisição
  const { data: restaurantFood, isLoading } = useGetRestaurantSelectedQuery(id || '')

  // Exibe o loader enquanto a requisição está em andamento
  if (isLoading) {
    return <Loader />
  }

  // Verifica se os dados do restaurante foram carregados antes de renderizar os componentes
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
            preco: 0
          }}
        />
        <Footer />
        <Cart />
      </>
    )
  }

  // Retorna um componente de erro ou uma mensagem se o restaurante não for encontrado
  return <div>Restaurante não encontrado</div>
}

export default Perfil
