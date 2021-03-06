import axios from 'axios';

export const setLoader = (val) => ({
  type: 'SET_LOADER',
  payload: val,
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoader(false))
  axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(({ data }) => {
      dispatch(setPizzas(data))
    })
}

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
})

