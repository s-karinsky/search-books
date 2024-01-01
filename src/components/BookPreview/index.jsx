import styles from './styles.module.scss'

export default function BookPreview({
  title,
  image,
  category,
  author,
  link
}) {
  return (
    <div
      className={styles.bookPreview}
      style={{ backgroundImage: `url(${image})` }}
    >
      <a href={link} target='_blank' className={styles.bookPreview__title}>{title}</a>
    </div>
  )
}