import cn from 'classnames'
import styles from './styles.module.scss'

export default function Input({
  label,
  vertical,
  className,
  isLoading,
  ...rest
}) {
  return (
    <label
      className={cn(styles.input, {
        [styles.input_vertical]: vertical,
        [className]: !!className
      })}
    >
      {!!label &&
        <span className={styles.input__label}>
          {label}
        </span>
      }
      <input
        className={cn(styles.input__field, {
          [styles.input__field_loading]: isLoading
        })}
        {...rest}
      />
    </label>
  )
}