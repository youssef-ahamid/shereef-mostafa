<script>
  /* props */
  export let text = 'Copyright Forever and Ever' // *, url
  export let className = '' // *, custom wrapper classes
  
  /* styles */
  import { classes } from './styles'
</script>

<div class={classes.copyright + className}>
  <h4 class={classes.text}>{text}</h4>
  <a href="https://www.yesagency.site" target="_blank">
    <h5>Designed & Developed with ❤️  by <span class={classes.logo}>yes.</span></h5>
  </a>
</div>
