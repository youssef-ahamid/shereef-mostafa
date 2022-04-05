import { resolve } from '$lib/helpers'

export let hero = options => {
  return [
    {
      classes:
        'w-full relative flex flex-nowrap p-4 mx-auto pt-12 items-center justify-center lg:justify-between',
    },
    { on: [options.fullHeight, true], classes: 'min-h-screen' },
    { on: [options.reverse, true], classes: 'flex-col-reverse lg:flex-row-reverse' },
    { on: [options.reverse, false], classes: 'flex-col lg:flex-row' },
  ]
}

export let cta = options => {
  return [
    {
      classes:
        'absolute left-4 top-4 md:-top-2 md:left-auto md:right-0 md:translate-x-1/2',
    },
  ]
}

export let logoWrapper = 'z-[980] hidden md:block absolute top-5 left-8 w-40 h-40 group'
export let logo = 'block overflow-visible ml-[5%] py-4 md:w-36 md:h-36 text-primary group-hover:text-accent origin-center'
export let logoInner = 'group-hover:scale-95 group-active:scale-90 origin-center'
export let logoOuter = 'group-hover:scale-105 origin-center group-active:scale-110'

export let left =
  'mx-auto relative my-3 pt-12 lg:pt-0 lg:my-0 lg:-mt-4 space-y-2'
export let right =
  'mx-auto relative my-3 pt-2 lg:pt-0 lg:my-0 lg:-mt-4 space-y-2'

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
