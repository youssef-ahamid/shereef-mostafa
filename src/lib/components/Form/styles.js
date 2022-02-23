import { serializeClasses } from '$lib/helpers'

const formStyles = []

let options
const isActiveClass = style => style.error && options.error

export const config = props => {
  options = props
  return { form: serializeClasses(formStyles, isActiveClass) }
}
