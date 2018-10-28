<template>
  <div class="AC">
    <button class="AC__on" @click="postToSlack(on)">
      ON
    </button>
    <button class="AC__off" @click="postToSlack(off)">
      OFF
    </button>
  </div>
</template>

<script>
import HTTPMethods from '@/network/ajax';

export default {
  data() {
    return {
      on: 'homebot send acon',
      off: 'homebot send acoff'
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
.AC {
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
