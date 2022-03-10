import { resolve } from '$lib/helpers'

export let iconWrapper = options => {
  return [
    {
      classes:
        'w-12 flex flex-col items-end md:items-start md:w-16 fixed right-8 top-10 md:left-8 md:top-1/2 md:-translate-y-1/2 z-[800]',
    }
  ]
}

export let socials = options => {
  return [
    {
      classes: 'flex fixed left-[6%] bottom-[10%]'
    }
  ]
}

export let stepper = options => {
  return [
    {
      classes:
        'fixed right-5 top-1/2 -translate-y-1/2 w-5 z-[600]',
    },
  ]
}

let options
export const config = props => {
  options = props
  return {
    iconWrapper: resolve(iconWrapper(options)),
    socials: resolve(socials(options)),
    stepper: resolve(stepper(options)),
  }
}
