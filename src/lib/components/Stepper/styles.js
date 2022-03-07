import { serializeClasses } from '$lib/helpers'

const stepperStyles = [
  { classes: 'flex' },
  { direction: 'vertical', classes: 'flex-col' },
  { direction: 'horizontal', classes: 'flex-row' },
]

const stepStyles = [
  {
    classes:
      'rounded-full transition duration-300 ease-out bg-primary m-1',
  },
  {
    active: true,
    classes: 'bg-opacity-100',
  },
  {
    active: false,
    classes: 'bg-opacity-50',
  },
  { direction: 'vertical', classes: 'w-1 min-h-[35px]' },
  { direction: 'horizontal', classes: 'h-1 min-w-[35px]' },
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
