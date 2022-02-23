export default function isEmail(value) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(value)
}
