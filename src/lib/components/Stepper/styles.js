import { serializeClasses } from '$lib/helpers'

const stepperStyles = [
  { classes: 'flex' },
  { direction: 'vertical', classes: 'flex-col' },
  { direction: 'horizontal', classes: 'flex-row' },
]

const stepStyles = [
  {
    classes:
      'rounded-lg transition duration-300 ease-out bg-primary m-1',
  },
  {
    direction: '',
    active: true,
    classes: 'bg-opacity-100',
  },
  {
    direction: '',
    active: false,
    classes: 'bg-opacity-50',
  },
  { direction: 'vertical', classes: 'w-1 h-[40px]' },
  { direction: 'horizontal', classes: 'h-1 w-[40px]' },
]

const activeStyles = [
  { direction: 'vertical', classes: 'scale-y-[200%]' },
  { direction: 'horizontal', classes: 'scale-x-[200%]' },
]

let options
const isActiveClass = style => {
  return (style.direction === options.direction || !style.direction || style.active === options.active)
}

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
