import { serializeClasses } from '$lib/helpers'

const indicatorStyles = [
  {
    type: 'base',
    classes:
      'w-0.5 md:w-1 h-16 md:h-24 rounded-full transition duration-300 ease-out bg-primary',
  },
  { direction: 'up', classes: '-translate-y-2' },
  { direction: 'down', classes: 'translate-y-2' },
  {
    active: true,
    classes: 'bg-opacity-100 scale-y-100 translate-y-0',
  },
  { active: false, classes: 'bg-opacity-50 scale-y-75' },
]

const textStyles = [
  {
    type: 'base',
    classes:
      'absolute left-1/2 max-w-fit transition duration-300 ease-out text-primary transform rotate-90 origin-left mx-2 md:mx-3',
  },
  { direction: 'up', classes: '-translate-y-2' },
  { direction: 'down', classes: 'translate-y-2' },
  { active: true, classes: 'text-opacity-100 translate-y-0' },
  { active: false, classes: 'text-opacity-75' },
]

const controlStyles =
  'fixed left-1/2 -translate-x-1/2 bottom-0 flex justify-center items-start w-20 h-auto'

let options
const isActiveClass = style => {
  return (
    style.type == 'base' ||
    style.direction == options.direction ||
    style.active === options.scrollAllowed
  )
}

export let classes = {}
const getClasses = () => {
  classes = {
    control: controlStyles,
    indicator: serializeClasses(indicatorStyles, isActiveClass),
    text: serializeClasses(textStyles, isActiveClass),
  }
  return classes
}

export const config = props => {
  options = props
  return getClasses()
}
