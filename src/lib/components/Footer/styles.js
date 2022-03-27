export let footer = 'w-full py-12 pb-40 mb-20 relative max-h-[100px]'
export let list = 'w-[70%] flex flex-wrap justify-between items-start'
export let links = 'w-full'
export let link = ''
export let copyright =
  'absolute right-0 max-w-[70%] pb-4 top-full translate-y-full font-extralight'

export const config = () => {
  return {
    footer,
    list,
    links,
    link,
    copyright,
  }
}
