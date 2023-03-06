<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="wrapper">
    <div class="inner">
      <a href="/">
        <img
          class="logo-game-online"
          src="../assets/images/logo.jpg"
          alt="logo-game"
        />
      </a>
      <div class="search d-none d-sm-block">
        <input placeholder="Search game" />
      </div>
      <div class="action">
        <button class="dice-3">
          <i class="bi bi-bell d-none d-sm-block bi-icon-action"></i>
        </button>
        <button class="button-sign-in">
          <i class="bi bi-person-circle"></i> SIGN IN
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.wrapper {
  --search-height: 46px;
  --search-top-spacer: 9px;
  width: 100%;
  height: 60px;
  box-shadow: 0px 1px 1px rgb(64, 223, 91);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: white;
}

.inner {
  height: 100%;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo-game-online {
  height: 50px;
}
.search {
  position: relative;
  width: 27%;
  height: 46px;
  padding-left: 16px;
  display: flex;
  background-color: rgba(22, 24, 35, 0.06);
  border-radius: 92px;
  border: 1.5px solid rgb(64, 223, 91);
}
.search input {
  flex: 1;
  height: 100%;
  color: rgb(64, 223, 91);
  font-size: 1.6rem;
  caret-color: var(--primary);
  background-color: transparent;
}
.search input:not(:placeholder-shown) ~ .search-btn {
  color: rgb(64, 223, 91);
}
.search ::after {
  content: "";
  position: absolute;
  top: 9px;
  right: 52px;
  width: 1px;
  height: calc(var(--search-height) - var(--search-top-spacer) * 2);
  background-color: rgba(22, 24, 35, 0.12);
}
.search :focus-within {
  border-color: rgba(22, 24, 35, 0.2);
}
button,
input,
[tabindex] {
  border: none;
  outline: none;
}

a[href] {
  text-decoration: none;
  color: rgb(64, 223, 91);
}
.dice-3 {
  background-color: white;
  font-size: 1.2rem;
  margin-right: 6px;
}
.button-sign-in {
  background-color: white;
  /* border: 1px solid black; */
  color: black;
  height: 34px;
  width: 90px;
  padding-top: 0.5px;
  border-radius: 20px;
}
.bi-icon-action {
  color: rgb(64, 223, 91);
}
</style>
