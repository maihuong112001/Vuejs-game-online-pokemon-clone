<template>
  <div class="screen">
    <h1 class="mt-4">Poke Memories</h1>
    <p>Select mode to start game</p>
    <div class="row modes">
      <button class="col-10 col-sm-4 col-md-5" @click="onStart(16)">
        <span>4x4</span>
        <span>Easy</span>
      </button>
      <button class="col-10 col-sm-4 col-md-5" @click="onStart(36)">
        <span>6x6</span>
        <span>Normal</span>
      </button>
      <button class="col-10 col-sm-4 col-md-5" @click="onStart(64)">
        <span>8x8</span>
        <span>Hard</span>
      </button>
      <button class="col-10 col-sm-4 col-md-5" @click="onStart(100)">
        <span>10x10</span>
        <span>Super Hard</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["onStart"],
  methods: {
    onStart(totalOfBlocks) {
      this.$emit("onStart", { totalOfBlocks });
    },
  },
};
</script>

<style lang="scss" scoped>
.screen {
  width: 100%;
  height: 160vh;
  margin-top: 62px;
  position: absolute;
  top: 0;
  z-index: 2;
  left: 3;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  background-color: var(--dark);
  color: rgb(64, 223, 91);
}

.screen h1 {
  font-size: 4.5rem;
  text-transform: uppercase;
}

.screen p {
  font-size: 2rem;
}

.modes {
  display: flex;
  margin-top: 2rem;
}

.modes button {
  font: var(--font);
  width: 150px;
  height: 150px;
  background: transparent;
  box-shadow: none;
  border: 1px solid rgb(64, 223, 91);
  color: rgb(64, 223, 91);
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  margin: 1rem 1.8rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.modes button:hover {
  background-color: var(--light);
  color: var(--dark);
}

.modes button span:first-child {
  font-size: 2rem;
}

.modes button span:last-child {
  display: block;
  font-size: 1.25rem;
  margin-top: 0.5rem;
}
</style>
