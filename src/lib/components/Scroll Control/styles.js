import { serializeClasses } from '$lib/helpers'

const indicatorStyles = [
  
]

const textStyles = [
  
]

const controlStyles = [
  
]

let options
const isActiveClass = style => style.active === options.scrollAllowed 

export let classes = {}
const getClasses = () => {
  classes = {
    control: serializeClasses(controlStyles, isActiveClass),
    indicator: serializeClasses(indicatorStyles, isActiveClass),
    text: serializeClasses(textStyles, isActiveClass),
  }
}

export const config = props => {
  options = props
  getClasses()
}
