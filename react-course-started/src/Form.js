import FormInput from './FormInput'

function Form() {
  return (
    <form>
      <FormInput name="name" />
      <FormInput name="surname" />
      <FormInput name="password" type="password" />
    </form>
  )
}

export default Form
