import exists from './required'
import isEmail from './email'

export default function isValid (validation, value) {
    if(!validation) return true

    let map = [
        { id: 'required', run: exists },
        { id: 'email', run: isEmail },
    ]
    
    let fn = map.filter(_ => _.id == validation)[0]
    if (!fn) throw new Error(`validation not found.\n\nPossible validations:\n${map.map(_ => _.id) + '\n '}\nValidation provided: ${validation}`)
    return fn.run(value)
}
