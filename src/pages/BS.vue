<template>
  <div class="BS">
    <div class="BS-etc">
      <button class="BS-etc__boot" @click="postToSlack(bootSwitch)">
        <i class="fas fa-power-off"></i>
      </button>
      <button class="BS-etc__changeinput" @click="postToSlack(changeInput)">
        <i class="fas fa-exchange-alt"></i>
      </button>
    </div>
    <br>
    <div class="BS-control">
      <button class="BS-control__empty">
        <i class="fas fa-power-off"></i>
      </button>
      <button class="BS-control__allow" @click="postToSlack(up)">
        <i class="fas fa-chevron-up"></i>
      </button>
      <button class="BS-control__empty">
        <i class="fas fa-power-off"></i>
      </button>
      <br>
      <button class="BS-control__allow" @click="postToSlack(left)">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="BS-control__enter" @click="postToSlack(enter)">
        OK
      </button>
      <button class="BS-control__allow" @click="postToSlack(right)">
        <i class="fas fa-chevron-right"></i>
      </button>
      <br>
      <button class="BS-control__empty">
        <i class="fas fa-power-off"></i>
      </button>
      <button class="BS-control__allow" @click="postToSlack(down)">
        <i class="fas fa-chevron-down"></i>
      </button>
      <button class="BS-control__allow" @click="postToSlack(back)">
        Back
      </button>
    </div>

    <div class="BS-channel">
      <button class="BS-channel__ch" @click="postToSlack(channel.num[1])">
        1
      </button>
      <button class="BS-channel__ch" @click="postToSlack(channel.num[2])">
        2
      </button>
      <button class="BS-channel__ch" @click="postToSlack(channel.num[3])">
        3
      </button>
      <br>
      <button class="BS-channel__ch" @click="postToSlack(channel.num[4])">
        4
      </button>
      <button class="BS-channel__ch" @click="postToSlack(channel.num[5])">
        5
      </button>
      <button class="BS-channel__ch" @click="postToSlack(channel.num[6])">
        6
      </button>
      <br>
      <button class="BS-channel__ch" @click="postToSlack(channel.num[7])">
        7
      </button>
      <button class="BS-channel__ch" @click="postToSlack(channel.num[8])">
        8
      </button>
      <button class="BS-channel__ch" @click="postToSlack(channel.num[9])">
        9
      </button>
      <br>
      <button class="BS-channel__ch" @click="postToSlack(channel.num[0])">
        0
      </button>
      <button class="BS-channel__ch" @click="postToSlack(program)">
        <i class="far fa-newspaper"></i>
      </button>
    </div>

    <div class="BS-vol">
      <button class="BS-vol__vol" @click="postToSlack(volume.minus)">
        <i class="fas fa-volume-down"></i>
      </button>
      <button class="BS-vol__vol" @click="postToSlack(volume.plus)">
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
      bootSwitch: 'homebot send bsboot',
      volume: {
        minus: 'homebot send bsvoldown',
        plus: 'homebot send bsvolup'
      },
      channel: {
        minus: 'ch minus',
        plus: 'ch plus',
        num: [
          'homebot send bs0',
          'homebot send bs1',
          'homebot send bs2',
          'homebot send bs3',
          'homebot send bs4',
          'homebot send bs5',
          'homebot send bs6',
          'homebot send bs7',
          'homebot send bs8',
          'homebot send bs9',
        ]
      },
      program: 'homebot send bsprogram',
      right: 'homebot send bsright',
      left: 'homebot send bsleft',
      up: 'homebot send bsup',
      down: 'homebot send bsdown',
      enter: 'homebot send bsenter',
      back: 'homebot send bsback',
      changeInput: 'homebot send tschangeinput'
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
.BS {
  padding-top: 15px;
  text-align: center;

  & .BS-channel {
    padding-top: 15px;
    &__ch {
      background: #fff;
      width: 80px;
      height: 60px;
      border: solid;
      font-size: 25px;
    }
  }

  & .BS-control {
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

  & .BS-vol {
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

  & .BS-etc {
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
