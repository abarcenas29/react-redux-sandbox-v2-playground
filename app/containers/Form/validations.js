export const validate = values => {
  const errors = {}

  const { firstName, lastName } = values

  if (!firstName) {
    errors.firstName = 'First name is required'
  }

  if (!lastName) {
    errors.lastName = 'Last name is required'
  }

  return errors
}