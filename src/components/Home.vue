<template>
  <div>
    <Item v-for="(json, index) in list" :json="json" :key="index" />
  </div>
</template>

<script>
import Item from '@/components/Item'
import listsoure from '@/utils/List'
export default {
  name: 'Home',
  data () {
    return {
      list: listsoure
    }
  },
  components: {
    Item
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
