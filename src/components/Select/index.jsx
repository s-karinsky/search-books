import cn from 'classnames'
import styles from './styles.module.scss'

export default function Select({
  options,
  label,
  vertical,
  className,
  ...rest
}) {
  return (
    <label
      className={cn(styles.select, {
        [styles.select_vertical]: vertical,
        [className]: !!className
      })}
    >
      {!!label &&
        <span className={styles.select__label}>
          {label}
        </span>
      }
      <select
        className={styles.select__field}
        {...rest}
      >
        {options.map(option => (
          <option
            value={option.value || option}
            key={option.value || option}
          >
            {option.label || option.value || option}
          </option>
        ))}
      </select>
    </label>
  )
}