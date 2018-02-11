import Vue from 'vue'

var getPrams = function(url) {
  if (url.indexOf("?") == -1) {
    return
  }
  var pram = url.split("?")[1];
  pram = pram.split("&");
  var prams = {},
    pra = [];
  for (var i = 0; i < pram.length; i++) {
    pra = pram[i].split("=");
    prams[pra[0]] = pra[1];
  }
  return prams;
}
//弹窗方法，首先得传vnode
const layer = (vnode, msg, type = 'error') => {
  vnode.$message({
    type: type,
    message: msg
  })
}
// 时间转换

const DateFormat = function(fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}

const onVue = new Vue();
// 退出
let exit = (vm) => {
  let login = sessionStorage.login && JSON.parse(sessionStorage.login);
  if (!sessionStorage.login || (sessionStorage.login && !login.login)) {
    layer(vm, "先请登录", "warning");
    sessionStorage.clear();
    vm.$router.push("/login");
  }
}

//判断中断
const check = function(arr, vm) {

  return arr.some((item, index) => {
    return _a(item.bol, item.msg)
  })

  function _a(bol, msg) {
    if (bol) {
      layer(vm, msg)
      return true
    }
  }

}

const checkPro = function(path, vm, bol = false) {
  let login = JSON.parse(sessionStorage.login)
  let notAdmin = login.level < 2;

  if (path === 'admin') {
    login[path] = true;
  }

  if (!login[path] || (bol && notAdmin)) {
    vm.$router.push({
      path: 'notPro'
    })
  }
}

class CgObject {
  constructor(domObj, dataObj, type = 'init', vm, key = 'keyName') {
    this.oldvm = JSON.parse(JSON.stringify(vm))
    this.vm = vm
    if (type === 'init') {
      this.vm = this.initObj(dataObj)
    } else {
      this.vm = this.subObj(domObj, key)
    }
  }
  initObj(obj) {
    // let valArr = Object.values(obj)
    console.log(key)
    let vm = this.vm
    let keyArr = Object.keys(obj)
    keyArr.forEach((item, index) => {
      if (vm.hasOwnProperty(item)) {
        if (obj[item] instanceof Object &&
          !(obj[item] instanceof Array)) {
          this.initObj(obj[item])
        } else {
          vm[item] = obj[item]
        }
      }
    })
    return vm
  }
  subObj(obj, key) {
    if (!(obj instanceof Array)) {
      return
    }
    let vm = this.vm
    obj.forEach((item, index) => {
      let key = item.keyName
      if (vm.hasOwnProperty(key)) {
        if (item[key] instanceof Object &&
          !(item[key] instanceof Array)) {
          this.initObj(obj[item])
        } else {
          vm[key] = item[key]
        }
      }
    })
    return vm
  }
}
// 取出改变的属性组成新的对象
class difObject {
  constructor(val, old) {
    this.old = old;
    this.val = val;
    this.obj = {};
    this.diff(val, old, this.obj)
    return this.obj
  }

  diff(val, old, obj) {
    if (this.isSame(val, old)) {
      return {}
    }
    for (var key in val) {
      if (!this.isSame(val[key], old[key])) {
        if (val[key] instanceof Object) {
          obj[key] = {}
          this.diff(val[key], old[key], obj[key])
        } else {
          obj[key] = val[key]
        }

      }
    }
  }

  isSame(val, old) {
    
    if (!(val instanceof Object)) {
      return val == old
      // return false  返回改变处前一层对象的所有属性
    }
    let bol = true

    for (var key in val) {

      if (val[key] instanceof Object) {

        bol = this.isSame(val[key], old[key])
        if (bol === false) {
          return false
        }
      } else {
         if (
           !old.hasOwnProperty(key)||
           val[key]!=old[key]) {

            return false
         }
      }

    }
    return bol
  }
}

export {
  getPrams,
  layer,
  onVue,
  DateFormat,
  exit,
  check,
  checkPro,
  CgObject,
  difObject
}