<template>
  <div class="Menu">
    <router-link to="/light">Light</router-link>
    <router-link to="/ac">AC</router-link>
    <router-link to="/tv" >TV</router-link>
    <router-link to="/bs">BS</router-link>
  </div>
</template>

<style scoped lang="scss">
.Menu {
  padding-top: 15px;
  text-align: center;
  border-bottom: 3px solid #000;
  margin: 0 15px;
  & a {
    margin: 10px;
    font-size: 25px;
  }
  & .router-link-exact-active {
    font-weight: 500;
  }
}
</style>
