export const validateLoginForm = ({data}) => {
  const isMailValid = validateEmail(data.email)
  const isPasswordValid = validatePassword(data.password)
  return isMailValid && isPasswordValid
}

const validatePassword = (password) => {
  return password.length > 8 && password.length < 12
}
const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
  return emailPattern.test(email)
}