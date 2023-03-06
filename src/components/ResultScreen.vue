<template>
  <div class="screen">
    <h1>✨ Congratulations ✨</h1>
    <h3>{{ Math.round(timer / 920) }} seconds</h3>
    <button @click="onStartAgain">Start Again</button>
  </div>
</template>

<script>
export default {
  props: {
    timer: {
      type: Number,
      default: 0,
    },
  },
  emits: ["onStartAgain"],
  methods: {
    onStartAgain() {
      this.$emit("onStartAgain");
    },
  },
};
</script>

<style lang="scss" scoped>
.screen {
  width: 100%;
  height: 100vh;
  margin-top: 62px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: var(--dark);
  color: rgb(64, 223, 91);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.screen h1 {
  font-size: 5rem;
}

.screen h3 {
  margin-top: 1.5rem;
  font-size: 3rem;
}

.screen button {
  font: var(--font);
  background: transparent;
  box-shadow: none;
  border: 1px solid rgb(64, 223, 91);
  color: rgb(64, 223, 91);
  margin: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.screen button:hover {
  background-color: var(--light);
  color: var(--dark);
}
</style>
