<script>
    /* props */
    export let type = 'custom'
    export let src = ''
    export let alt = ''
    export let className = '' // *, custom wrapper classes

    /* styles */
    import { stylus } from "$lib/helpers";
    import { imgWrapper, imgOverlay, img } from './styles'
    
    let wrapper = stylus(imgWrapper({ type }))
    let image = stylus(imgOverlay({ type }))
    let overlay = stylus(img({ type, src }))
</script>

<div class={`${wrapper.classes} ${className}`} style={wrapper.styles}>
    <img {src} {alt} class={image.classes} style={image.styles} />
    <div class={overlay.classes} style={overlay.styles}></div>
</div>