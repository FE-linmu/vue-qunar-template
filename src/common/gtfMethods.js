class Methods {
  constructor() {}
  // 捕获相同属性值的数组
  catchSameProperty(arr, prop) {
    var obj = {}
    for (var i of arr) {
      if (!obj[i[prop]]) {
        obj[i[prop]] = [].concat(i)
      } else {
        obj[i[prop]].push(i)
      }
    }
    return obj
  }
}

export default new Methods()
