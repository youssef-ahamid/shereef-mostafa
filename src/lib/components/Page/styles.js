import { resolve } from '$lib/helpers'

export let cta = options => {
  return [
    {
      classes:
        'hidden md:fixed md:block right-8 top-5 z-[600] drop-shadow-[5px_15px_25px_rgba(225,226,239,0.18)] hover:drop-shadow-[5px_15px_25px_rgba(225,226,239,0.32)]',
    },
  ]
}

export let title = options => {
  return [
    {
      classes: 'fixed top-[15%] left-8 z-[997]',
    },
  ]
}

export let socials = options => {
  return [
    {
      classes: 'flex fixed left-[6%] bottom-[10%]',
    },
  ]
}

export let stepper = options => {
  return [
    {
      classes: 'fixed right-5 top-1/2 -translate-y-1/2 w-5 z-[600]',
    },
  ]
}

export let content = options => {
  return [
    {
      classes: 'mt-28 md:ml-24',
    },
  ]
}

let options
export const config = props => {
  options = props
  return {
    cta: resolve(cta(options)),
    title: resolve(title(options)),
    socials: resolve(socials(options)),
    stepper: resolve(stepper(options)),
    content: resolve(content(options)),
  }
}
