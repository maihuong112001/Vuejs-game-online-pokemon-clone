<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container content-home">
    <div class="row">
      <div class="col-12 col-sm-8">
        <div class="row">
          <router-link :to="{ name: 'Pokemo' }" class="col pd-0">
            <img src="../assets/images/cong-chua-keo-ngot.jpg" />
            <h2 class="mt-2 mb-4">Pickachu - Tom and Cherry - Ghep Hinh</h2>
          </router-link>
          <router-link :to="{ name: 'Pokemo' }" class="col pd-0">
            <img src="../assets/images/dua-xe-cong-thuc.jpg" />
            <h2 class="mt-2 mb-4">Pickachu - Tom and Cherry - Ghep Hinh</h2>
          </router-link>
        </div>
        <div class="row">
          <router-link :to="{ name: 'Pokemo' }" class="col pd-0">
            <img src="../assets/images/tom-va-jerry-ghep-hinh.jpg" />
            <h2 class="mt-2 mb-4">Pickachu - Tom and Cherry - Ghep Hinh</h2>
          </router-link>
          <router-link :to="{ name: 'Pokemo' }" class="col pd-0">
            <img src="../assets/images/ba-bau-kham-thai.jpg" />
            <h2 class="mt-2 mb-4">Pickachu - Tom and Cherry - Ghep Hinh</h2>
          </router-link>
        </div>
      </div>
      <div class="col-12 col-sm-4 p-0 sidebar">
        <div class="header-side">
          <h2>Top Đấu Sĩ</h2>
        </div>
        <div class="content-side">
          <div class="row mt-4">
            <div class="col"><i class="bi bi-virus"></i></div>
            <div class="col-5">
              <h2 class="head-content-side">Bác sĩ bát lục.</h2>
              <h2 class="cont-side">Điểm: 31.623</h2>
              <h2 class="cont-side">Anh em nhà gấu trúc</h2>
            </div>
            <div class="col"><i class="bi bi-virus"></i></div>
          </div>
          <div class="row mt-4">
            <div class="col"><i class="bi bi-virus"></i></div>
            <div class="col-5">
              <h2 class="head-content-side">Giáo sư LONGGAY.</h2>
              <h2 class="cont-side">Điểm: 31.623</h2>
              <h2 class="cont-side">Anh em nhà gấu trúc</h2>
            </div>
            <div class="col"><i class="bi bi-virus"></i></div>
          </div>
          <div class="row mt-4">
            <div class="col"><i class="bi bi-virus"></i></div>
            <div class="col-5">
              <h2 class="head-content-side">Giáo sư LONGGAY.</h2>
              <h2 class="cont-side">Điểm: 31.623</h2>
              <h2 class="cont-side">Anh em nhà gấu trúc</h2>
            </div>
            <div class="col"><i class="bi bi-virus"></i></div>
          </div>
          <div class="row mt-4">
            <div class="col"><i class="bi bi-virus"></i></div>
            <div class="col-5">
              <h2 class="head-content-side">Giáo sư LONGGAY.</h2>
              <h2 class="cont-side">Điểm: 31.623</h2>
              <h2 class="cont-side">Anh em nhà gấu trúc</h2>
            </div>
            <div class="col"><i class="bi bi-virus"></i></div>
          </div>
          <div class="row mt-4">
            <div class="col"><i class="bi bi-virus"></i></div>
            <div class="col-5">
              <h2 class="head-content-side">Giáo sư LONGGAY.</h2>
              <h2 class="cont-side">Điểm: 31.623</h2>
              <h2 class="cont-side">Anh em nhà gấu trúc</h2>
            </div>
            <div class="col"><i class="bi bi-virus"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content-home {
  margin-top: 90px;
}
.sidebar {
  border: 1px solid rgb(64, 223, 91);
  border-radius: 5px;
}
.header-side {
  width: 100%;
  height: 35px;
  text-align: center;
  padding-top: 6px;
  background-color: rgb(64, 223, 91);
}
.content-side {
  border-top: 1px solid rgb(64, 223, 91);
  height: 400px;
  text-align: center;
  padding-top: 8px;
}
.head-content-side {
  color: blue;
  font-size: 1.1rem;
}
.cont-side {
  color: brown;
}
</style>
