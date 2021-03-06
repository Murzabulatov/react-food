import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, PizzaBlock, PizzaLoader, SortPopup } from '../../components';
import axios from 'axios';
import { setCategory, setSortBy } from '../../redux/actions/filters';
import { fetchPizzas } from '../../redux/actions/pizzas';
import { addPizzaToCart } from '../../redux/actions/cart';


const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',];
const sortItems = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items)
  const cartItems = useSelector(({ cart }) => cart.items)

  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const { category, sortBy } = useSelector(({ filters }) => filters);


  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, [])


  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, [])

  const handlerAddPizza = (pizzaObj) => {
    dispatch(addPizzaToCart(pizzaObj))
  }
  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy])

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category} onClickCategory={onSelectCategory} items={categories} />
        <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map(item => <PizzaBlock
            onClickAddPizza={handlerAddPizza}
            key={item.id}
            addedCount={cartItems[item.id] && cartItems[item.id].items.length}
            {...item}
          />)
          : Array(12).fill(0).map((_, index) => <PizzaLoader key={index} />)}
      </div>
    </div>
  )
}

export default Home;
