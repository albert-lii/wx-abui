/*======================================================================
 *  时间相关
 *======================================================================*/

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

module.exports = {
  startCountdown: startCountdown,
  stopInterval: stopInterval
}