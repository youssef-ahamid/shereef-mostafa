import { resolve } from '$lib/helpers'

export let cta = options => {
  return [
    {
      classes:
        'hidden md:fixed md:block right-8 top-5 z-[600] drop-shadow-[5px_15px_25px_rgba(225,226,239,0.18)] hover:drop-shadow-[5px_15px_25px_rgba(225,226,239,0.32)]',
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
    cta: resolve(cta(options)),
    socials: resolve(socials(options)),
    stepper: resolve(stepper(options)),
  }
}
