
<script>
    import { base } from "$app/paths";
    import Controls from '../lib/player/Controls.svelte'
</script>

<h1
  class="text-center">Welcome</h1>
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<div class="row text-center">
  <div class="col-12">
    <img src="https://media.tenor.com/FJonHWl-xVsAAAAM/ketelaere-de-ketelaere.gif">
  </div>
  <div class="col-12 mt-2">
    <a class="btn btn-secondary" href="{base}/me">me</a>

    <a class="btn btn-secondary" href="{base}/about">About</a>
    <!-- <a href="{base}/friends">Friends</a>  -->
    <a class="btn btn-danger" href="{base}/love">Amore mio</a>

    <a class="btn btn-primary" href="{base}/friend">Friend</a>
    <a class="btn btn-primary" href="{base}/happybd">Happy Birthday</a>
  </div>

  <div class="container w-50 mt-3 mb-4">
    <Controls/>
  </div>

  <div class="col-12 mt-2">
    <img src="https://64.media.tumblr.com/aeecfb8f9b0983648da7c08645ff4d84/787bbac45fd81407-78/s540x810/3c1e43e8f08bcebcf9c8f0e18b77aeff2c7349d4.gifv">
  </div>
</div>