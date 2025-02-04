<script>
    import Navbar from "$lib/components/navbar.svelte";
    let { children } = $props();
    import "../app.css";
  </script>
  <div class="bg-white">
    <Navbar/>
    {@render children()}
  </div>
  
  