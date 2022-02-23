import { serializeClasses } from '$lib/helpers'

const labelStyles = [
  { type: 'base', classes: 'my-3 md:my-6 block' },
  { type: 'text', classes: 'w-1/2' },
  { type: 'text area', classes: 'w-full' },
]

const nameStyles = []

const inputStyles = [
  {
    type: 'base',
    classes:
      'transition duration-200 ease-out appearance-none outline-none bg-primary bg-opacity-[15%] focus:bg-opacity-25 px-2 pt-1 md:px-3 md:pt-2 pb-1 my-0.5 md:my-1 border-content border-b-2 border-primary border-opacity-50 focus:border-opacity-100',
  },
  {
    type: 'text area',
    classes: 'resize-none w-full h-24 md:h-32'
  },
  {
    type: 'text',
    classes: 'w-4/5 h-8 md:h-12'
  }
]

let options
const isActiveClass = style => {
  return (
    style.type === 'base' ||
    style.type === options.type ||
    (style.trim && options.trim) ||
    (style.long && options.long) ||
    (style.clean && options.clean)
  )
}

export const config = props => {
  options = props
  return {
    label: serializeClasses(labelStyles, isActiveClass),
    input: serializeClasses(inputStyles, isActiveClass),
    name: serializeClasses(nameStyles, isActiveClass),
  }
}
