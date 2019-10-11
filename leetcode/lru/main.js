//  可以被运行的对象叫函数
function LRUCache(capacity) {
  this.capacity = capacity;
  this.obj = {}; //get put 存储数据
  // push  splice  pop  unshift
  this.arr = []; //优先级
}
LRUCache.prototype.get = function (key) {
  // 没有 返回 -1
  // 处理优先级
  var val = this.obj[key]
  if (val) {
    var index = this.arr.indexOf(key);
    this.arr.splice(index, 1);
    this.arr.unshift(key);
    return val;
  }else{
    return -1;
  }
}
LRUCache.prototype.put = function (key, value) {
  if (this.obj[key]) {//已存在
    this.obj[key] = value;
    // 调整它的优先级，在某个位置？删除，在移动到最前面
    var index = this.arr.indexOf(key);
    this.arr.splice(index, 1);
    this.arr.unshift(key);
    return
  }

  if (this.capacity === this.arr.length) {//放满了
    var k = this.arr.pop();
    this.obj[k] = undefined;
  }
  this.obj[key] = value;
  this.arr.unshift(key); //放到最前面，最前面最优先
}

let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));        // 返回  1
cache.put(3, 3);                  // 该操作会使得密钥 2 作废
console.log(cache.get(2));        // 返回 -1 (未找到)
cache.put(4, 4);                  // 该操作会使得密钥 1 作废
console.log(cache.get(1));        // 返回 -1 (未找到)
console.log(cache.get(3));        // 返回  3
console.log(cache.get(4));        // 返回  4