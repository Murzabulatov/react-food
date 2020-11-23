import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, PizzaBlock, SortPopup } from '../../components';
import axios from 'axios';
import { setCategory } from '../../redux/actions/filters';

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',];
const sortItems = ['популярности', 'цене', 'алфавиту'];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items)

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
    console.log(index);
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClick={onSelectCategory} items={categories} />
        <SortPopup items={sortItems} />
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
