/**
 *排序   冒泡排序
 */
export function minToMax(array ) {
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
}



/**
 * 快速排序
 */
export function quickSort(array) {
  
}
