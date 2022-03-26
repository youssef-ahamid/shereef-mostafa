import { resolve } from '$lib/helpers'

export let section = options => {
    return [
        {
            classes: 'py-12 md:py-20'
        },
    ]
}

export let content = options => {
    return [
        {
            on: [options.noContain, false],
            classes: "md:max-w-[80%] mx-auto"
        }
    ]
}

export let ctaContainer = options => {
    return [
        {
            classes: "w-full flex justify-center"
        },
    ]
}


export const config = props => {
    return {
        section: resolve(section(props)),
        content: resolve(content(props)),
        ctaContainer: resolve(ctaContainer(props)),
    }
}
