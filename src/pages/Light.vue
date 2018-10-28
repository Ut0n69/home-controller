<template>
  <div class="Light">
    <button class="Light__on" @click="postToSlack(on)">
      ON
    </button>
    <button class="Light__off" @click="postToSlack(off)">
      OFF
    </button>
  </div>
</template>

<script>
import HTTPMethods from '@/network/ajax';

export default {
  data() {
    return {
      on: 'homebot send light1on',
      off: 'homebot send light1off'
    };
  },
  methods: {
    postToSlack(cmd) {
      const network = new HTTPMethods(cmd);
      network.postAjax();
    },
  }
};
</script>

<style lang="scss">
.Light {
  padding-top: 30px;
  text-align: center;
  &__on,
  &__off {
    font-size: 30px;
    margin: 30px;
    width: 250px;
    height: 250px;
    border: 2px solid #000;
    background: #fff;
    color: #000;
    transition: 0.3s;
  }
}
</style>
