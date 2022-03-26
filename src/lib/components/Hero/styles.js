import { resolve } from '$lib/helpers'

export let hero = options => {
  return [
    {
      classes:
        'w-full relative flex flex-col lg:flex-row flex-nowrap p-4 mx-auto items-center justify-center lg:justify-between',
    },
    { on: [options.fullHeight, true], classes: 'min-h-screen' },
  ]
}

export let cta = options => {
  return [
    {
      classes:
        'absolute left-4 -top-2 md:left-auto md:right-0 md:translate-x-1/2',
    },
  ]
}

export let left =
  'mx-auto w-[80%] relative my-3 lg:my-0 lg:-mt-4 lg:max-w-[45%] space-y-2'
export let right =
  'mx-auto w-[80%] relative my-3 lg:my-0 lg:-mt-4 lg:max-w-[45%] space-y-2'

let options
export const config = props => {
  options = props
  return {
    hero: resolve(hero(options)),
    cta: resolve(cta(options)),
    left,
    right,
  }
}
