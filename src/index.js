export default (age) => {
  const currentYear = new Date().getFullYear()
  return currentYear - age
}
