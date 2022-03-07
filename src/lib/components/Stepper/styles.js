import { serializeClasses } from '$lib/helpers'

const stepperStyles = [
  { classes: 'flex' },
  { direction: 'vertical', classes: 'flex-col' },
  { direction: 'horizontal', classes: 'flex-row' },
]

const stepStyles = [
  {
    classes:
      'rounded-full transition duration-300 ease-out bg-primary bg-opacity-50 m-1 scale-y-100 scale-x-100',
  },
  { direction: 'vertical', classes: 'w-1 h-[35px]' },
  { direction: 'horizontal', classes: 'h-1 w-[35px]' },
]

const activeStyles = [
  {
    classes:
      'bg-opacity-100',
  },
  { direction: 'vertical', classes: 'scale-y-[200%]' },
  { direction: 'horizontal', classes: 'scale-x-[200%]' },
]

let options
const isActiveClass = style =>
  style.direction === options.direction || !style.direction

export let classes = {}
const getClasses = () => {
  classes = {
    stepper: serializeClasses(stepperStyles, isActiveClass),
    step: serializeClasses(stepStyles, isActiveClass),
    active: serializeClasses(activeStyles, isActiveClass),
  }
}

export const config = props => {
  options = props
  getClasses()
}
