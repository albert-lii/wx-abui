Component({
  properties: {
    // banner 数据源
    src: {
      type: Array,
      value: null
    },
    // 当前页面的标题
    currenttitle: {
      type: String,
      value: ''
    },
    // 页面切换间隔时间
    interval:{
      type:Number,
      value:5000
    },
    // 页面滑动动画时长
    duration:{
      type: Number,
      value: 500
    }
  },

  methods: {
    /**
     * 页面切换监听
     */
    _bannerChanged: function(e) {
      this.triggerEvent('change', e);
    },
    /**
     * banner item 点击事件
     */
    _bannerItemTap: function(e) {
      this.triggerEvent('itemtap', e);
    }
  }
})