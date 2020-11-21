import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, PizzaBlock, SortPopup } from '../../components';
import axios from 'axios';
import setPizzas from '../../redux/actions/pizzas'

const Home = () => {

  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    }
  })

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClick={(item) => console.log(item)} items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]} />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map(item =>
          <PizzaBlock key={item.id} {...item} />
        )}
      </div>
    </div>
  )
}

export default Home;
