import { serializeClasses } from '$lib/helpers'

const thumbnailWrapperStyles =
  'relative w-full min-w-[300px] md:min-w-[500px] lg:min-w-[700px] max-w-[300px] md:max-w-[500px] lg:max-w-[700px] max-h-[500px]'

const overlayStyles =
  'absolute inset-0 bg-gradient-to-b from-transparent to-secondary z-30 pointer-events-none'

const thumbnailStyles = [
  {
    type: 'base',
    classes: 'w-full peer block mx-auto',
  },
  { fade: 'small', classes: 'opacity-75' },
  { fade: 'medium', classes: 'opacity-50' },
  { fade: 'large', classes: 'opacity-25' },
]

let options
const isActiveClass = style => {
  return style.type == 'base' || style.fade === options.fade
}

export const config = props => {
  options = props
  return {
    thumbnailWrapper: thumbnailWrapperStyles,
    overlay: overlayStyles,
    thumbnail: serializeClasses(thumbnailStyles, isActiveClass),
  }
}
