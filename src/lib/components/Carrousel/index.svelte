<script>
    /* props */
    export let items = [] // *, array of carrousel items
    export let currentStep = 0 // *, starting step
    export let className = '' // *, custom wrapper classes

    import CarrouselItem from '$lib/components/Carrousel Item/index.svelte'
    import List from '$lib/components/List/index.svelte'

    /* events */
    import { createEventDispatcher } from 'svelte/internal'
    const dispatch = createEventDispatcher()

    /* methods */
    export const next = () => { // toggle/set selected state 
        if(currentStep != items.length - 1) currentStep ++
        else dispatch('complete')
    }
    export const prev = () => {
        if (currentStep != 0) currentStep--
    }
    export const select = (num = currentStep) => currentStep = num

    /* styles */
    import { config } from './styles'
    $: classes = config()
</script>

<div class={`${classes.carrouselWrapper} ${className}`}>
    <List {items} let:item className={classes.carrousel}>
        <CarrouselItem
            {...item}
            on:preview={() => {select(items.indexOf(item))}}
            remaining={(items.indexOf(item) - currentStep)}
            className={classes.carrouselItem}
        />
    </List>
</div>
  