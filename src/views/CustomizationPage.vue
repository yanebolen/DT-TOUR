<template>
  <div class="CustomizationPage">
    <div class="fr1">
      <div class="card" style="height: 50rem">
        <img src="../assets/edit-file 1.svg" style="margin-top: 2rem" alt="DT TOUR">
        <h1 style="text-align: center; margin-top: 2rem; margin-bottom: 2rem; font-size: 50px">Что хотим посетить?</h1>
        <div style="margin-right: 8rem; margin-left: 8rem;">

          <div class="vertical-scroll-wrapper squares">
            <div class="card mb-2" v-for="day in 1" :key="day.id">
              <h4>День {{day}}</h4>

                  <componentsCartList :cartList_data="cartList" v-if="CART_LIST.length" v-for="cartList in CART_LIST" :key="cartList.day"></componentsCartList>

                <div class="mx-5 my-2">
                  <button type="button" class="btnOpenPopup btn btn-link" @click="btnOpenPopup">+ Добавить</button>
                </div>
            </div>
          </div>

            <div class="row">
              <div class="col">
                <router-link to="/PlanningPage"><button type="button" class="btn btn-link">Отменить</button></router-link>
              </div>
              <div class="col" style="text-align: right;">
                <router-link to="/ConfirmationPage"><button type="button" class="btn btn-primary">Следующий шаг</button></router-link>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="fr2">
      <componentsSettings></componentsSettings>
    </div>

    <componentsPopup v-if="isPopupVisible" @isClosePopup="isClosePopup"></componentsPopup>

  </div>
</template>

<script>
import componentsSettings from '../components/componentsSettings'
import componentsPopup from '../components/componentsPopup'
import componentsCartList from '../components/componentsCartList'
import {mapGetters} from 'vuex'

export default {
  name: 'CustomizationPage',
  components: {
    componentsSettings,
    componentsPopup,
    componentsCartList
  },
  data(){
    return{
      isPopupVisible: false,
    }
  },
  computed: {
    ...mapGetters([
      'CART_LIST'
    ]),
  },
  methods: {
    btnOpenPopup() {
      this.isPopupVisible = true;
    },
    isClosePopup(){
      this.isPopupVisible = false;
    },
  },
}
</script>

<style>
.CustomizationPage{
  margin-left: 15rem;
  display: grid;
  grid-template-columns: 5fr 2fr;
}
/* Скролл элементов внутри spa */
.vertical-scroll-wrapper {
  /* width: 500px; */
  height: 25rem;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 3rem;
}
/* Стилизация объектов внутри скрола */
.vertical-scroll-wrapper > div {
  /* width: 100px; */
  /* height: 10rem; */
}
/* Эта функция скрывает полосу прокрутки */
.vertical-scroll-wrapper::-webkit-scrollbar {
  width: 0;
}
</style>
