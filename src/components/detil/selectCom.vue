// 选择排序
<template>
  <div>
      <h4>选择排序</h4>
  </div>
</template>

<script>
export default {
  name: 'selectCom',
  created () {
    let array = []
    for (let i = 0 ; i < 10 ; i ++) {
      let num = parseInt(Math.random() * 1000);
      array.push(num)
    }
    console.log(array)
    let sortArray = this.selectSortMinToMax(array)
    console.log(sortArray)
  },
  methods: {
    selectSortMinToMax (array) {
      let arrLne = array.length
      for (let i = 0; i < arrLne - 1 ; i ++) {
        let minIndex = i
        for (let j = i + 1; j < arrLne; j ++) {
          if (array[minIndex] > array[j]) {
            minIndex = j
          }
        }
        let temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp
      }
      return array
    },
    selectSortMaxToMin (array) {
      let arrLen = array.length
      for (let i = 0; i < arrLen - 1; i ++) {
        let maxIndex = i
        for (let j = i + 1; j < arrLen; j ++) {
          if (array[maxIndex] < array[j]) {
            maxIndex = j
          }
        }
        let temp = array[i]
        array[i] = array[maxIndex]
        array[maxIndex] = temp
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
</style>
