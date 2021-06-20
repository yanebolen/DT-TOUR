<template>
  <div class="ConfirmationPage">
    <div class="fr1">
      <div class="card" style="height: 50rem">
        <img src="../assets/edit-file 1.svg" style="margin-top: 2rem" alt="DT TOUR">
        <h1 style="text-align: center; margin-top: 2rem; margin-bottom: 2rem; font-size: 50px">Проверим данные</h1>
        <div style="margin-right: 8rem; margin-left: 8rem;">

          <div class="vertical-scroll-wrapper squares" v-if="CART_LIST.length" >
            <div class="card mb-2" v-for="tour in 1" :key="tour.id">
              <h4>День {{tour}}</h4>

                <div v-for="cartList in CART_LIST" :key="cartList.day">
                  <div class="card mx-5 my-2">
                    <div class="row" style="height: 45px;">
                      <div class="col mx-3">
                        <p class="mt-2">{{cartList.name}}</p>
                      </div>
                      <div class="col mx-3" style="text-align: right;">
                        <p class="mt-2">{{cartList.time}}</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>

            <div class="row">
              <div class="col">
              <router-link to="/CustomizationPage"><button type="button" class="btn btn-link">Отменить</button></router-link> 
              </div>
              <div class="col" style="text-align: right;">
                <button type="button" class="btn btn-primary">Сохранить</button>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="fr2">
      <componentsSettings></componentsSettings>
    </div>
  </div>
</template>

<script>
import componentsSettings from '../components/componentsSettings'
import {mapGetters} from 'vuex'

export default {
  name: 'ConfirmationPage',
  components: {
    componentsSettings
  },
  data(){
    return{

    }
  },
  computed: {
    ...mapGetters([
      'CART_LIST'
    ]),
  },
  methods: {

  }
}
</script>

<style>
.ConfirmationPage{
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
