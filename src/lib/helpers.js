export const serializeClasses = (styles, condition) => {
  return styles
    .filter(s => condition(s))
    .map(_ => _.classes)
    .join(' ')
}

import isValid from '$lib/validations'
export const assert = (validations, value) => {
  for (let i = 0; i < validations.length; i++)
    if (!isValid(validations[i].type, value))
      return { success: false, failed: validations[i] }
  return { success: true }
}
