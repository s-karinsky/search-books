import axios from '../../utils/axios'
import { setLoaded, setLoading, appendBooks, setBooks, setTotal } from '.' 

export const fetchBooks = ({
  q,
  category,
  orderBy,
  startIndex = 0,
  maxResults = 30
}, isAppend) => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    if (category && category !== 'all') {
      q += ` subject:${category}`
    }
    const response = await axios.get('/volumes', { params: { q, orderBy, startIndex, maxResults } })
    const { items, totalItems } = response.data || {}
    const books = items.map(({ volumeInfo = {}, id }) => ({
      id,
      authors: volumeInfo.authors,
      categories: volumeInfo.categories,
      link: volumeInfo.infoLink,
      image: volumeInfo.imageLinks?.smallThumbnail,
      title: volumeInfo.title
    }))
    if (!isAppend) {
      dispatch(setTotal(totalItems))
    }
    dispatch((isAppend ? appendBooks : setBooks)(books))
    dispatch(setLoaded(true))
  } catch (e) {
    console.error(e)
  } finally {
    dispatch(setLoading(false))
  }
}