/*======================================================================
 *  时间相关
 *======================================================================*/

/*============================================================
 *  计时器相关
 *============================================================*/

/**
 * 开启倒计时
 * 
 * @param initialval 初始值
 * @param interval 间隔时间
 * @param callback 倒计时回调函数
 */
function startCountdown(initialval, interval = 1000, callback) {
  if (initialval <= 0) {
    return;
  }
  let _restval = initialval;
  let _timerId = setInterval(function() {
    _restval--;
    if (callback != undefined && callback != null && typeof callback == 'function') {
      callback(_restval);
    }
    if (_restval <= 0) {
      stopInterval(_timerId);
    }
  }, interval);
}

/**
 * 清除计时器
 * 
 * @param intervalId 计时器Id
 */
function stopInterval(intervalId) {
  if (intervalId != undefined && intervalId != null) {
    clearInterval(intervalId);
  }
}

/*============================================================
 *  时间转换相关
 *============================================================*/

/**
 * 将时间字符串转换为时间戳
 * 
 * timeStr 时间字符串
 */
function str2Stamp(timeStr) {
  if (timeStr == undefined || timeStr == null || timeStr == '') {
    return 0;
  }
  return Date.parse(new Date(timeStr));
}

/**
 * 将时间戳转换为时间字符串
 * 
 * timeStamp 时间戳
 * format    返回的字符串格式
 */
function stamp2Str(timeStamp, format = 'Y-M-D h:m:s') {
  let _formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  let _returnArr = [];
  let _date = new Date(timeStamp);
  _returnArr.push(_date.getFullYear());
  _returnArr.push(_formatNumber(_date.getMonth() + 1));
  _returnArr.push(_formatNumber(_date.getDate()));
  _returnArr.push(_formatNumber(_date.getHours()));
  _returnArr.push(_formatNumber(_date.getMinutes()));
  _returnArr.push(_formatNumber(_date.getSeconds()));

  for (let i in _returnArr) {
    format = format.replace(_formateArr[i], _returnArr[i]);
  }
  return format;
}

/**
 * 如果时间值是 1 位数，则在前面加上 0，例如：秒的值为 6，则处理后返回 06
 */
function _formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  startCountdown: startCountdown,
  stopInterval: stopInterval,
  str2Stamp: str2Stamp,
  stamp2Str: stamp2Str
}