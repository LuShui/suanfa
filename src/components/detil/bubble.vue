// 冒泡排序
<template>
  <div>
      <h4>冒泡排序</h4>
      <textarea readonly v-model="str"></textarea>
  </div>
</template>

<script>
export default {
  name: 'Bubble',
  created () {
    let array = []
    for (let i = 0 ; i < 10 ; i ++) {
      let num = parseInt(Math.random() * 1000);
      array.push(num)
    }
    console.log(array)
    let sortArray = this.bubbleSortMinToMax(array)
    console.log(sortArray)
  },
  methods: {
    bubbleSortMaxToMin (array) {
      let arrLne = array.length
      for (let i = 0; i < arrLne - 1; i++) {
        for (let j = 0; j< arrLne - i; j ++) {
          if (array[j] < array[j + 1]) {
            let tmp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = tmp
          }
        }
      }
      return array
    },
    bubbleSortMinToMax (array) {
      let arrLne = array.length
      for (let i = 0; i < arrLne; i ++) {
        for (let j = 0; j < arrLne - i; j ++) {
          if (array[j] > array[j + 1]) {
            let temp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = temp
          }
        }
      }
      return array
    }
  },
  computed: {
    sortTostr () {
      if (this.sortArray.length > 0) {
        return this.sortArray.toString()
      } else {
        return ''
      }
    },
    str () {
      return `      for (let i = 0; i < arrLne - 1; i++) {
        for (let j = 0; j< arrLne - i; j ++) {
          if (array[j] < array[j + 1]) {
            let tmp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = tmp
          }
        }
      }
      return array`
    }
  }
}
</script>

<style scoped>
div{
  width: 100%;
  height: 100%;
}
h4{
  height: 64px;
  line-height: 64px;
  text-align: center;
}
textarea{
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  white-space: 5px;
  line-height: 24px;
  resize: none;
}
</style>
