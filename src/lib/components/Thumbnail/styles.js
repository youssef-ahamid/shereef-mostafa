import { serializeClasses } from '$lib/helpers'

const thumbnailStyles = []

let options
const isActiveClass = style => {
  return (
    style.type === 'base' ||
    style.fade === options.fade
  )
}

export const config = props => {
  options = props
  return { thumbnail: serializeClasses(thumbnailStyles, isActiveClass) }
}
