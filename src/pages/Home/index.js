import { Categories, PizzaBlock, SortPopup } from '../../components';

const Home = ({ items }) => {

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
