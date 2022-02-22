import { serializeClasses } from '$lib/helpers'

const buttonStyles = [
  {
    type: 'base',
    classes:
      'px-2 py-1 m-2 md:px-4 md:py-2 md:m-4 flex items-center justify-center group transition duration-300 ease-out hover:scale-[105%]',
  },
  { type: 'reverse', classes: 'flex-row-reverse' },
  { type: 'primary', classes: 'bg-secondary text-primary' },
  { type: 'secondary', classes: 'bg-primary text-secondary' },
  { type: 'disabled', classes: 'opacity-25 hover:scale-100' },
  {
    shape: 'default',
    classes: 'border-2 border-primary hover:bg-current',
  },
  {
    shape: 'full',
    classes:
      'w-full border-2 border-primary hover:bg-current mx-auto',
  },
  { shape: 'ghost', classes: 'bg-transparent hover:text-primary' },
]

const labelStyles = [
  { type: 'base', classes: 'transition duration-200 ease-out' },
  { type: 'primary', classes: 'group-hover:text-secondary' },
  {
    type: 'secondary',
    classes: 'text-secondary group-hover:text-primary',
  },
  {
    shape: 'default',
    classes: 'uppercase tracking-[.5em] px-2 py-1',
  },
  { shape: 'full', classes: 'uppercase tracking-[.5em] px-2 py-1' },
  { shape: 'ghost', classes: 'group-hover:text-current' },
]

const iconStyles = [
  { type: 'base', classes: 'w-8 h-8 mx-1 md:w-12 md:h-12 md:mx-2' },
  { type: 'reverse', classes: 'transform rotate-180' },
  {
    type: 'primary',
    classes: 'text-primary group-hover:text-secondary',
  },
  {
    type: 'secondary',
    classes: 'text-secondary group-hover:text-primary',
  },
  {
    shape: 'ghost',
    classes: 'text-primary group-hover:text-primary',
  },
]

let options
const isActiveClass = style => {
  return (
    style.type === options.type ||
    style.type === 'base' ||
    style.shape === options.shape ||
    (!options.active && style.type === 'disabled') ||
    (options.reverse && style.type === 'reverse')
  )
}

export let classes = {}
const getClasses = () => {
  classes = {
    button: serializeClasses(buttonStyles, isActiveClass),
    label: serializeClasses(labelStyles, isActiveClass),
    icon: serializeClasses(iconStyles, isActiveClass),
  }
}

export const config = props => {
  options = props
  getClasses()
}
