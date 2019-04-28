Component({

  properties: {
    // 数据源
    src: {
      type: Array,
      value: null
    }
  },

  options: {
    multipleSlots: true
  },

  methods: {
    /**
     * 标签点击监听
     */
    _labelTap: function(e) {
      console.log(e)
      this.triggerEvent('labeltap', e);
    }
  }
})