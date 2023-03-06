<template>
  <div class="screen">
    <div
      class="screen-inner"
      :style="{
        width: `${withScreenInner}px`,
      }"
    >
      <card-memmory
        v-for="(card, index) in cardsContext"
        :key="index"
        :ref="`card-${index}`"
        :cardsContext="cardsContext"
        :imgBackFaceUrl="`images/${card}.png`"
        :card="{ index, value: card }"
        :rules="rules"
        @onFlip="checkRule($event)"
      />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  props: {
    cardsContext: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  components: {
    CardMemmory: Card,
  },
  data() {
    return {
      rules: [],
      withScreenInner:
        ((((920 - 16 * 4) / Math.sqrt(this.cardsContext.length) - 16) * 3) / 4 +
          16) *
        Math.sqrt(this.cardsContext.length),
    };
  },
  methods: {
    async checkRule(card) {
      console.log(card);
      console.log(this.rules);
      if (this.rules.length === 2) return false;
      this.rules.push(card);
      if (
        this.rules.length === 2 &&
        this.rules[0].card.value === this.rules[1].card.value
      ) {
        console.log("Right...");
        // this.$refs[`card-${this.rules[0].index}`].onEnabledDisabledMode();
        // this.$refs[`card-${this.rules[1].index}`].onEnabledDisabledMode();
        this.rules[0].onEnabledDisabledMode();
        this.rules[1].onEnabledDisabledMode();
        this.rules = [];

        const disabledElements = document.querySelectorAll(
          ".screen .card.disabled"
        );
        if (
          disabledElements &&
          disabledElements.length === this.cardsContext.length - 2
        )
          setTimeout(() => {
            this.$emit("onFinish");
          }, 920);
      } else if (
        this.rules.length === 2 &&
        this.rules[0].card.value !== this.rules[1].card.value
      ) {
        console.log("Fail");
        await sleep(1000);
        this.rules[0].onFlipBackCard();
        this.rules[1].onFlipBackCard();
        this.rules = [];
      } else return false;
    },
  },
};
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
(async () => {
  console.log("Hello");
  await sleep(2000);
  console.log("world");
})();
</script>

<style scoped>
.screen {
  width: 100%;
  height: 156vh;
  margin-top: 62px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  color: var(--light);
}

.screen-inner {
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;
}
</style>
