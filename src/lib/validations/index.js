import exists from './required'
import isEmail from './email'

export default isValid = (validation, value) => {
    let map = [
        { id: 'required', run: exists },
        { id: 'email', run: isEmail },
    ]
    let fn = map.filter(_ => _.id == v)[0]
    if (!fn) {
        throw new Error(`validation not found.\n\nPossible validations:\n${map.map(_ => _.id) + '\n'}\nValidation provided: ${v}`)
        return true
    }
    return fn.run(value)
}
