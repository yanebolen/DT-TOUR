<template id="">

      <div class="card mx-5 my-2">
        <div class="row" style="height: 45px;">
          <div class="col mx-3">
            <p class="mt-2">{{cartList_data.name}}</p>
          </div>
          <div class="col mx-3" style="text-align: right;">
            <p class="mt-2">{{cartList_data.time}}</p>
          </div>
        </div>
      </div>

</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: "componentsCartList",

  components: {
  },
  props:{
    cartList_data:{
        type: Object,
        default() {
          return {}
        }
    }
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

  },
}
</script>
<style>

</style>
