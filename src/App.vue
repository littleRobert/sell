<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评价</div>
      <div class="tab-item">商家</div>
    </div>
    <div class="content">
      i am content
    </div>
  </div>
</template>

<script>
import VHeader from './components/header/header'

export default {
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.$http.post('api/seller').then((res) => {
      this.seller = res.data
    }, (error) => {
      console.log(error)
    })
  },
  components: {
    VHeader
  }
}
</script>

<style scoped>
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .tab-item {
    flex: 1;
    text-align: center;
  }
</style>
