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

export const stylus = theme => {
  let active = theme.filter(s => s.on)
  return {
    classes: active.map(_ => _.classes).join(' '),
    styles: active.map(_ => _.styles).join(' '),
  }
}

export const getOffset = el => {
  var _x = 0
  var _y = 0
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft
    _y += el.offsetTop - el.scrollTop
    el = el.offsetParent
  }
  return { top: _y, left: _x }
}
