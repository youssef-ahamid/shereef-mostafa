import { resolve } from '$lib/helpers'

export let iconWrapper = options => {
  return [
    {
      classes:
        'transition duration-200 w-12 h-12 md:h-16 scale-125 pl-1 flex rounded-full flex-col items-center justify-center text-center md:w-16 fixed md:absolute bg-secondary shadow-secondary/30 shadow-xl right-8 top-10 md:left-8 md:top-1/2 md:-translate-y-1/2 z-[999]',
    },
    {
      on: [options.active, true],
      classes:
        'bg-transparent md:bg-primary md:bg-opacity-50 text-primary md:text-secondary',
    },
    {
      on: [options.active, false],
      classes: 'bg-secondary bg-opacity-75 text-primary',
    },
  ]
}

export let icon = options => {
  return [
    {
      classes: `scale-75 md:scale-100`,
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
      classes: 'mt-12 md:mt-16',
    },
  ]
}

export let links = options => {
  return [
    {
      classes:
        'before:absolute before:top-16 before:-translate-y-1/2 before:left-0 before:w-[80%] md:before:w-96 before:h-0.5 md:before:h-1 before:bg-primary before:rounded-r-full pt-16 md:pl-16',
    },
  ]
}

export let nav = options => {
  return [
    {
      classes:
        'md:top-0 fixed top-0 left-0 bottom-0 right-0 md:right-auto md:w-[520px] md:left-0 bg-secondary p-12 md:p-16 rounded-3xl drop-shadow-[5px_15px_25px_rgba(225,226,239,0.18)] z-[998] transition duration-500 ease-out',
    },
    {
      on: [options.active, false],
      classes: '-translate-x-full opacity-25',
    },
    {
      on: [options.active, true],
      classes: 'translate-x-0 opacity-100',
    },
  ]
}

export const config = props => {
  return {
    iconWrapper: resolve(iconWrapper(props)),
    icon: resolve(icon(props)),
    active: resolve(active(props)),
    inactive: resolve(inactive(props)),
    link: resolve(link(props)),
    nav: resolve(nav(props)),
    links: resolve(links(props)),
  }
}
