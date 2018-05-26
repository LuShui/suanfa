<template>
  <div>
    this is test2 branch
  </div>
</template>

<script>
import { minToMax } from '../utils/Utils'
export default {
  name: 'Home',
  created () {
    let array = [ 1, 23, 28, 32, 12, 213, 14, 3 ]
    let sortArray = minToMax(array)
    console.log(sortArray)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
