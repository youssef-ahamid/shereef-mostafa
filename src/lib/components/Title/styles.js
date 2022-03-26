import { resolve } from '$lib/helpers'

export let titleWrapper = props => {
  return [{ classes: 'w-full flex items-center' }]
}

export let line = props => {
  return [
    {
      classes:
        'rounded-br-full rounded-tr-full w-36 md:w-80 bg-primary h-1 mr-3',
    },
  ]
}

export let title = props => {
  return [{ classes: 'leading-0' }]
}

let options
export const config = props => {
  options = props
  return {
    titleWrapper: resolve(titleWrapper(options)),
    line: resolve(line(options)),
    title: resolve(title(options)),
  }
}
