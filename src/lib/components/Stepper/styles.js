import { serializeClasses } from '$lib/helpers'

const stepperStyles = [
  { classes: 'flex' },
  { direction: 'vertical', classes: 'flex-col' },
  { direction: 'horizontal', classes: 'flex-row' },
]

const stepStyles = [
  {
    classes:
      'rounded-full transition duration-300 ease-out bg-primary bg-opacity-50 m-1',
  },
  { direction: 'vertical', classes: 'w-1 min-h-[35px]' },
  { direction: 'horizontal', classes: 'h-1 min-w-[35px]' },
]

const activeStyles = 'grow bg-opacity-100'

let options
const isActiveClass = style =>
  style.direction === options.direction || !style.direction

export let classes = {}
const getClasses = () => {
  classes = {
    stepper: serializeClasses(stepperStyles, isActiveClass),
    step: serializeClasses(stepStyles, isActiveClass),
    active: activeStyles,
  }
}

export const config = props => {
  options = props
  getClasses()
}
