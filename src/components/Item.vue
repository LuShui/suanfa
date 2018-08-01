<template>
  <div @click="clickfunc" class="item">
    <div class="left">{{json.name}}</div>
    <div class="right">&gt;</div>
  </div>
</template>

<script>
export default {
  props: ['json'],
  name: 'Item',
  methods: {
    clickfunc () {
      this.$router.push({
        path: this.json.path
      })
    }
  }
}
</script>

<style scoped>
.item{
  display: -webkit-box;
  height: 60px;
  background-color: white;
  border-bottom:1px solid gainsboro;
  font-size: 16px;
  line-height: 58px;
}
.left{
  flex: 1;
  text-indent: 20px;
}
.right{
  width: 30px;
  height: 60px;
  line-height: 58px;
  text-align: center;
}
</style>
