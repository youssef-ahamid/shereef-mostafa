import { resolve } from '$lib/helpers'

export let list = options => {
    return [
        {
            classes: 'flex flex-wrap justify-between w-[200px]'
        },
    ]
}

export let link = options => {
    return [
        {
            classes: ''
        },
    ]
}

export let sublink = options => {
    return [
        {
            classes: ''
        },
    ]
}


let options
export const config = props => {
    options = props
    return {
        list: resolve(list(options)),
        link: resolve(link(options)),
        sublink: resolve(sublink(options)),
    }
}
