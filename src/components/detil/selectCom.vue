// 选择排序
<template>
  <div>
      <h4>选择排序</h4>
  </div>
</template>

<script>
export default {
  name: 'selectCom',
  data () {
    return {
      array: [],
      sortArray: []
    }
  },
  created () {
    for (let i = 0 ; i < 10 ; i ++) {
      let num = parseInt(Math.random() * 1000);
      this.array.push(num)
    }
    this.sortArray = this.selectSort(this.array)
  },
  methods: {
    selectSort (array) {
      console.warn('原数组')
      console.log(array)
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
      console.warn('排序后数组')
      console.log(array)
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
