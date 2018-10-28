<template>
  <div class="TV">
    <div class="TV-etc">
      <button class="TV-etc__boot" @click="postToSlack(bootSwitch)">
        <i class="fas fa-power-off"></i>
      </button>
      <button class="TV-etc__changeinput" @click="postToSlack(changeInput)">
        <i class="fas fa-exchange-alt"></i>
      </button>
    </div>
    <br>
    <div class="TV-control">
      <button class="TV-control__empty">
        <i class="fas fa-power-off"></i>
      </button>
      <button class="TV-control__allow" @click="postToSlack(up)">
        <i class="fas fa-chevron-up"></i>
      </button>
      <button class="TV-control__empty">
        <i class="fas fa-power-off"></i>
      </button>
      <br>
      <button class="TV-control__allow" @click="postToSlack(left)">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="TV-control__enter" @click="postToSlack(enter)">
        OK
      </button>
      <button class="TV-control__allow" @click="postToSlack(right)">
        <i class="fas fa-chevron-right"></i>
      </button>
      <br>
      <button class="TV-control__empty">
        <i class="fas fa-power-off"></i>
      </button>
      <button class="TV-control__allow" @click="postToSlack(down)">
        <i class="fas fa-chevron-down"></i>
      </button>
      <button class="TV-control__allow" @click="postToSlack(back)">
        Back
      </button>
    </div>

    <div class="TV-channel">
      <button class="TV-channel__ch" @click="postToSlack(channel.num[1 - 1])">
        1
      </button>
      <button class="TV-channel__ch" @click="postToSlack(channel.num[3 - 1])">
        3
      </button>

      <button class="TV-channel__ch" @click="postToSlack(channel.num[4 - 1])">
        4
      </button>
      <button class="TV-channel__ch" @click="postToSlack(channel.num[6 - 1])">
        6
      </button>
      <button class="TV-channel__ch" @click="postToSlack(channel.num[7 - 1])">
        7
      </button>
      <button class="TV-channel__ch" @click="postToSlack(channel.num[8 - 1])">
        8
      </button>
      <button class="TV-channel__ch" @click="postToSlack(channel.num[10 - 1])">
        10
      </button>
      <button class="TV-channel__ch" @click="postToSlack(program)">
        <i class="far fa-newspaper"></i>
      </button>
    </div>

    <div class="TV-vol">
      <button class="TV-vol__vol" @click="postToSlack(volume.minus)">
        <i class="fas fa-volume-down"></i>
      </button>
      <button class="TV-vol__vol" @click="postToSlack(volume.plus)">
        <i class="fas fa-volume-up"></i>
      </button>
    </div>

  </div>
</template>

<script>
import HTTPMethods from '@/network/ajax';

export default {
  data() {
    return {
      bootSwitch: 'homebot send tvboot',
      volume: {
        minus: 'homebot send tvvoldown',
        plus: 'homebot send tvvolup'
      },
      channel: {
        minus: 'ch minus',
        plus: 'ch plus',
        num: [
          'homebot send tv1',
          'homebot send tv2',
          'homebot send tv3',
          'homebot send tv4',
          'homebot send tv5',
          'homebot send tv6',
          'homebot send tv7',
          'homebot send tv8',
          'homebot send tv9',
          'homebot send tv10',
          'homebot send tv11',
          'homebot send tv12',
        ]
      },
      program: 'homebot send tvprogram',
      right: 'homebot send tvright',
      left: 'homebot send tvleft',
      up: 'homebot send tvup',
      down: 'homebot send tvdown',
      enter: 'homebot send tventer',
      back: 'homebot send tvback',
      changeInput: 'homebot send tvchangeinput'
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
.TV {
  padding-top: 15px;
  text-align: center;

  & .TV-channel {
    padding-top: 15px;
    &__ch {
      background: #fff;
      width: 80px;
      height: 80px;
      border: solid;
      font-size: 25px;
    }
  }

  & .TV-control {
    &__allow {
      background: #fff;
      width: 80px;
      height: 70px;
      font-size: 25px;
      border: 0;
    }
    &__enter {
      background: #fff;
      width: 80px;
      height: 50px;
      font-size: 20px;
      border: 3px solid #000;
      border-radius: 50%;
    }
    &__empty {
      background: #fff;
      color: #fff;
      width: 80px;
      height: 70px;
      font-size: 25px;
      border: 0;
    }
  }

  & .TV-vol {
    padding-top: 25px;
    &__vol {
      background: #fff;
      width: 100px;
      height: 60px;
      border: solid;
      & i {
        font-size: 30px;
      }
    }
  }

  & .TV-etc {
    padding-top: 15px;
    &__boot {
      margin-right: 180px;
      background: #fff;
      border: 0;
      & i {
        font-size: 50px;
      }
    }
    &__changeinput {
      background: #fff;
      border: 0;
      & i {
        font-size: 50px;
      }
    }
  }
}
</style>
