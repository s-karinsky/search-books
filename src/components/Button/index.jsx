import cn from 'classnames'
import styles from './styles.module.scss'

export default function Button({ children, className, width, style, isLoading, ...rest }) {
  return (
    <button
      className={cn(styles.button, {
        [styles.button_loading]: isLoading,
        [className]: !!className
      })}
      style={{
        ...style,
        width
      }}
      {...rest}
    >
      {children}
    </button>
  )
}