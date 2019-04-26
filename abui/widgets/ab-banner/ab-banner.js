Component({
  properties: {
    // banner 数据源
    src: {
      type: Array,
      value: null
    },
    // 当前页面的标题
    currentTitle: {
      type: String,
      value: ''
    },
    // 页面切换间隔时间
    interval: {
      type: Number,
      value: 5000
    },
    // 页面滑动动画时长
    duration: {
      type: Number,
      value: 500
    },
    // 图片未加载完成时的占位图
    placeholder: {
      type: String,
      value: ''
    },
    // 图片加载失败时的占位图
    error: {
      type: String,
      value: ''
    },
  },

  methods: {
    /**
     * 页面切换监听
     */
    _itemChanged: function(e) {
      let _current = e.detail.current;
      this.triggerEvent('change', {
        current: _current
      });
    },
    /**
     * banner item 点击事件
     */
    _itemTap: function(e) {
      console.log(e)
      let _currentTarget = e.currentTarget;
      this.triggerEvent('itemtap', _currentTarget);
    }
  }
})