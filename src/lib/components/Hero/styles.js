import { resolve } from '$lib/helpers'

export let hero = options => {
  return [
    {
      classes:
        'w-full relative flex flex-col lg:flex-row flex-nowrap p-4 mx-auto pt-12 items-center justify-center lg:justify-between',
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

export let logo = 'hidden md:block overflow-visible ml-[5%] py-4 md:w-36 group text-primary hover:text-accent origin-center absolute left-0 top-8'
export let logoWrapper = 'z-[900]'
export let logoInner = 'group-hover:scale-95 group-active:scale-90 origin-center'
export let logoOuter = 'group-hover:scale-105 origin-center group-active:scale-110'

export let left =
  'mx-auto w-[80%] relative my-3 pt-12 lg:my-0 lg:-mt-4 lg:max-w-[45%] space-y-2'
export let right =
  'mx-auto w-[80%] relative my-3 pt-2 lg:my-0 lg:-mt-4 lg:max-w-[45%] space-y-2'

let options
export const config = props => {
  options = props
  return {
    hero: resolve(hero(options)),
    cta: resolve(cta(options)),
    left,
    right,
    logo,
    logoInner,
    logoOuter,
    logoWrapper
  }
}
