<template id="">
  <div class="listWrapper">
    <div class="popupListSwitcher">
      <button type="button" style="font-size: 25px; text-decoration: none; margin-bottom: 2rem" class="btn btn-link mx-2" @click="isCloseList">Карта</button>
      <button type="button" style="font-size: 25px; text-decoration: none; margin-bottom: 2rem" class="btn btn-link mx-2">Список</button>
    </div>
    <div class="card cardList">
      <h1>cardList</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "componentsList",

  components: {
  },
  data(){
    return{

    }
  },
  methods: {
    isCloseList(){
      this.$emit('isCloseList')
      this.isComponentsList = false;
    },
  }
}
</script>
<style>
.listWrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.cardList{
  height: 51rem;
  width: 80rem;
  margin-top: 5rem;
}
.popupListSwitcher{
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
}
</style>
