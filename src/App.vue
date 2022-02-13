<template>
  <nav class="navbar">
    <div class="one">
      <h5>Note Vue</h5>
    </div>
    <div class="two">
      <a href="https://github.com/ferdiansyah0611">Github</a>
    </div>
  </nav>
  <div class="containers mt-10">
    <router-view></router-view>
  </div>
</template>
<script>
export default{
  name: 'app'
}
</script>