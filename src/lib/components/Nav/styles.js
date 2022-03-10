import { resolve } from '$lib/helpers'

export let iconWrapper = options => {
  return [
    {
      classes:
        'w-12 flex flex-col items-end md:items-start md:w-16 fixed right-8 top-10 md:left-8 md:top-1/2 md:-translate-y-1/2 z-[999]',
    },
  ]
}

export let active = options => {
  return [
    {
      classes: `before:content-['+'] before:pr-3 decoration-secondary`,
    },
  ]
}

export let inactive = options => {
  return [
    {
      classes:
        'decoration-secondary hover:decoration-primary hover:opacity-50',
    },
  ]
}

export let link = options => {
  return [
    {
      classes:
        'flex underline underline-offset-2 decoration-2 cursor-pointer transition duration-300 ease-out py-1 min-w-[220px]',
    },
  ]
}

export let links = options => {
  return [
    {
      classes: 'p-4',
    },
  ]
}

export let nav = options => {
  return [
    {
      classes:
        'md:top-1/2 md:-translate-y-1/2 fixed top-0 left-0 w-full md:w-auto md:left-[7%] bg-secondary p-8 rounded-3xl drop-shadow-[5px_15px_25px_rgba(225,226,239,0.18)] z-[998]',
    },
  ]
}

let options
export const config = props => {
  options = props
  return {
    iconWrapper: resolve(iconWrapper(options)),
    active: resolve(active(options)),
    inactive: resolve(inactive(options)),
    link: resolve(link(options)),
    nav: resolve(nav(options)),
    links: resolve(links(options)),
  }
}
