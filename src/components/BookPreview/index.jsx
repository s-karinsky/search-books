import styles from './styles.module.scss'

export default function BookPreview({
  title,
  image,
  category,
  authors,
  link
}) {
  return (
    <a
      href={link}
      target='_blank'
      className={styles.bookPreview}
      style={{ backgroundImage: `url(${image})` }}
    >
      {!!category ? <div className={styles.bookPreview__category}>
        {category}
      </div> : <span></span>}
      <div className={styles.bookPreview__label}>
        <span className={styles.bookPreview__title}>{title}</span>
        <span className={styles.bookPreview__authors}>{[].concat(authors).join(', ')}</span>
      </div>
    </a>
  )
}