import cn from 'classnames'
import styles from './styles.module.scss'

export default function Button({ children, className, isLoading, ...rest }) {
  return (
    <button
      className={cn(styles.button, {
        [styles.button_loading]: isLoading,
        [className]: !!className
      })}
      {...rest}
    >
      {children}
    </button>
  )
}