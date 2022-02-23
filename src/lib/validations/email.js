export default isEmail = value => {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(value)
}