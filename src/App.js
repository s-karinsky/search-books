import { useEffect } from 'react'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import BookPreview from './components/BookPreview'
import Button from './components/Button'
import Form from './components/Form'
import Input from './components/Input'
import Select from './components/Select'
import { fetchBooks } from './redux/books'
import styles from './App.module.scss'

export default function App() {
  const dispatch = useDispatch()
  const error = useSelector(state => state.books.error)
  const lastRequest = useSelector(state => state.books.lastRequest)
  const isLoading = useSelector(state => state.books.isLoading)
  const isLoaded = useSelector(state => state.books.isLoaded)
  const totalItems = useSelector(state => state.books.total)
  const books = useSelector(state => state.books.list)

  useEffect(() => {
    if (!error) return
    window.alert(`Что-то пошло не так\n${error}`)
  }, [error])

  return (
    <div className={styles.app}>
      <div
        className={cn(styles.header, {
          [styles.header_collapsed]: isLoaded
        })}
      >
        <Form
          onSubmit={values => {
            if (isLoading) return
            dispatch(fetchBooks(values))
          }}
          className={styles.form}
        >
          <Input
            placeholder='keywords'
            label='Search for books'
            className={styles.form__input}
            name='q'
            isLoading={isLoading}
            required
            vertical
          />
          <Button className={styles.submit} type='submit'>
            <span>⚲</span>
          </Button>
          <Select
            label='in category'
            options={[ 'all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry' ]}
            className={styles.form__select}
            name='category'
            vertical
          />
          <Select
            label='sotring by'
            options={[ 'relevance', 'newest' ]}
            className={styles.form__select}
            name='orderBy'
            vertical
          />
        </Form>
      </div>
      {isLoaded &&
        <div className={styles.content}>
          <div className={styles.content__header}>
            Found {totalItems} books
          </div>
          <div className={styles.content__list}>
            {books.map(book => (
              <BookPreview
                {...book}
              />
            ))}
          </div>
          <div className={styles.content__footer}>
            {totalItems > books.length && <Button
              onClick={() =>
                dispatch(fetchBooks({
                  ...lastRequest,
                  startIndex: (lastRequest.startIndex || 0) + 30
                }, true))
              }
              isLoading={isLoading}
              disabled={isLoading}
              width={250}
            >
              Load more...
            </Button>}
          </div>
        </div>
      }
    </div>
  )
}

