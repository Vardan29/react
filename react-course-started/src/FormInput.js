import PropTypes from 'prop-types'

function FormInput(props) {
  return (
    <>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={`Enter your ${props.name}`}
      />
    </>
  )
}

FormInput.defaultProps = {
  type: 'text',
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password']),
}

export default FormInput
