Component({
  properties: {
    // 图片资源
    src: {
      type: String,
      value: ''
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
    // 是否执行懒加载
    lazyload: {
      type: Boolean,
      value: false
    },
    // 图片的弧度
    radius:{
      type:String,
      value:'0%'
    },
    mode:{
       type:String,
      value:'aspectFill'
    }
  },

  data: {
    // 是否加载完成
    loadFinish: false
  },

  methods: {
    /**
     * 加载成功
     */
    _loadSuccess: function(e) {
      this.setData({
        loadFinish: true
      });
      this.triggerEvent('success', e);
    },
    /**
     * 加载失败
     */
    _loadFail: function(e) {
      this.setData({
        loadFinish: true,
        src: this.data.error
      });
      this.triggerEvent('fail', e);
    }
  }
})