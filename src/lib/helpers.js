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

export const api = {
  post: async function (
    url = '',
    data = {},
    APIURL = '',
    cache = 'default'
  ) {
    let route = APIURL + '/api/' + url

    const response = await fetch(route, {
      method: 'POST',
      mode: 'cors',
      cache: cache,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return response.json() // parses JSON response into native JavaScript objects
  },
}

export const is = pair => {
  return pair ? pair[0] == pair[1] : true
}

export const resolve = theme => {
  return theme
    .filter(s => is(s.on))
    .map(_ => _.classes)
    .join(' ')
}
