<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="card"
    :class="{ disabled: isDisabled }"
    :style="{
      height: `${heightCard}px`,
      width: `${widthCard}px`,
      perspective: `${perspectiveCard}px`,
    }"
  >
    <div
      class="card-inner"
      :class="{ 'is-flipped': isFlipped }"
      @click="onToggleFlipCard"
    >
      <div class="card-face card-face-front">
        <div
          class="card-content"
          :style="{
            'background-size': `${backgroundSizeCardContent}px ${backgroundSizeCardContent}px`,
          }"
        ></div>
      </div>
      <div class="card-face card-face-back">
        <div
          class="card-content"
          :style="{
            backgroundImage: `url('${require('@/assets/' + imgBackFaceUrl)}')`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: [Array, String, Number, Object],
    },
    cardsContext: {
      type: Array,
      default: function () {
        return [];
      },
    },
    imgBackFaceUrl: {
      type: String,
      required: true,
    },
    rules: {
      type: Array,
    },
  },
  data() {
    return {
      isFlipped: false,
      isDisabled: false,
      backgroundSizeCardContent:
        (((920 - 16 * 4) / Math.sqrt(this.cardsContext.length) - 16) * 3) /
        4 /
        3,
      heightCard: (920 - 16 * 4) / Math.sqrt(this.cardsContext.length) - 16,
      widthCard:
        (((920 - 16 * 4) / Math.sqrt(this.cardsContext.length) - 16) * 3) / 4,
      perspectiveCard:
        ((((920 - 16 * 4) / Math.sqrt(this.cardsContext.length) - 16) * 3) /
          4) *
        2,
    };
  },
  methods: {
    onToggleFlipCard() {
      if (this.rules.length >= 2) return;
      if (this.isDisabled) return;
      this.isFlipped = !this.isFlipped;
      if (this.isFlipped) this.$emit("onFlip", this);
    },

    onFlipBackCard() {
      this.isFlipped = false;
    },

    onEnabledDisabledMode() {
      this.isDisabled = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.card-inner {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.card.disabled .card-inner {
  cursor: default;
}

.card-inner.is-flipped {
  transform: rotateY(-180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 3px 18px 3px rgba(0, 0, 0, 0.2);
}

.card-face-front .card-content {
  background: url("../assets/images/icon_back.png") no-repeat center center;
  height: 100%;
  width: 100%;
}

.card-face-back {
  background-color: var(--light);
  transform: rotateY(-180deg);
}

.card-face-back .card-content {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;
}
</style>
