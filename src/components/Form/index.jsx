export default function Form({
  onSubmit = () => {},
  children,
  ...rest
}) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const values = {}
        for (var pair of formData.entries()) {
          values[pair[0]] = pair[1]
        }
        onSubmit(values)
      }}
      {...rest}
    >
      {children}
    </form>
  )
}