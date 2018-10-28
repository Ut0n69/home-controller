<template>
  <div id="app">
    <Menu />
    <transition mode="out-in" name="slideQuad">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Menu from '@/components/Modules/Menu.vue';

export default {
  components: {
    Menu,
  },
  created() {
    let lastTouch = 0;
    document.addEventListener('touchend', (event) => {
      const now = window.performance.now();
      if (now - lastTouch <= 500) {
        event.preventDefault();
      }
      lastTouch = now;
    }, true);

    window.addEventListener('touchmove', (event) => {
      event.preventDefault();
    });
    this.$router.push('tv');
  }
};
</script>

<style lang="scss">
@import "./assets/Style/reset";
@import "./assets/Style/base";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 375px;
  margin: 0 auto;
}

.container {
  text-align: center;
}
</style>
