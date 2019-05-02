Component({
  properties: {
    // 列数
    columnCount: {
      type: Number,
      value: 2
    },
    // 列与列之间的间距（rpx）
    horizontalSpace: {
      type: Number,
      value: 14
    },
    // 上下 item 之间的间距（rpx）
    verticalSpace: {
      type: Number,
      value: 14
    },
    // 当前页
    pageNo: {
      type: Number,
      value: 0
    },
    // 当前页的未分组的数据源
    pageSrc: {
      type: Array,
      value: [],
      observer: function(newVal, oldVal) {
        if (this.data.pageNo == 0) {
          this._init(newVal);
        } else {
          // let _addlist = newVal.slice(oldVal.length,newVal.length);
          this._splitData(newVal);
        }
      }
    },
    // 图片加载时的占位图
    placeholder: {
      type: String,
      value: null
    },
    // 图片加载失败时显示的图片
    error: {
      type: String,
      value: null
    }
  },

  data: {
    // 列宽
    columnWidth: 354,
    // 分组后的数据源
    columnArr: [],
    // 记录每一列的高度
    columnHeights: []
  },

  methods: {
    /**
     * 初始化
     */
    _init: function(list) {
      let _columnArr = [];
      let _columnHeights = [];
      for (let i = 0, len = this.data.columnCount; i < len; i++) {
        _columnArr[i] = [];
        _columnHeights[i] = 0;
      }
      this.setData({
        columnArr: _columnArr,
        columnHeights: _columnHeights
      });

      // 列数
      let _columnCount = this.data.columnCount;
      // 列与列之间的间距
      let _hspace = this.data.horizontalSpace;
      let _query = wx.createSelectorQuery();
      let _page = this;
      _query.select('.waterfall').boundingClientRect();
      // 计算列的宽度
      _query.exec(function(rect) {
        if (rect == null || rect[0] == null) {
          return;
        }
        let _systemInfo = wx.getSystemInfoSync();
        let _screenWidth = _systemInfo.windowWidth;
        let _containerWidth = rect[0].width / _screenWidth * 750;
        let _columnWidth = (_containerWidth - (_columnCount - 1) * _hspace) / _columnCount;
        _page.setData({
          columnWidth: _columnWidth
        });
        _page._splitData(list);
      });
    },
    /**
     * 分割数据源
     * 
     * @param list 新增加的数据
     */
    _splitData: function(list) {
      // 列数
      let _columnCount = this.data.columnCount;
      // 记录每一列的高度，用于判断 item 应该添加在哪一列
      //（因为一般情况下，item 中图片之外的高度基本是固定的，所以此处只计算图片高度）
      let _columnHeights = this.data.columnHeights;
      let _columnArr = new Array(this.data.columnCount);
      for (let i in list) {
        let _item = list[i];
        // 原始图片的宽高 
        let _oriImgW = parseInt(_item.imgW);
        let _oriImgH = parseInt(_item.imgH);
        // item 中图片的宽高
        let _imgW = this.data.columnWidth;
        let _imgH = parseInt(_oriImgH * _imgW / _oriImgW);
        _item['imgH'] = _imgH;
        // 最短的列的序号
        let _minNo = 0;
        // 最短的列的高度
        let _minCH = _columnHeights[0];
        // 分列添加 item
        for (let j in _columnHeights) {
          if (_columnHeights[j] < _minCH) {
            _minNo = j;
            _minCH = _columnHeights[j];
          }
        }
        _columnHeights[_minNo] += _imgH;
        if (_columnArr[_minNo] == undefined || _columnArr[_minNo] == null) {
          _columnArr[_minNo] = [];
        }
        _columnArr[_minNo].push(_item);
      }
      for (let i in _columnArr) {
        this.setData({
          ['columnArr[' + i + '][' + this.data.pageNo + ']']: _columnArr[i]
        });
      }
    },
    /**
     * item 点击监听
     */
    _itemTap:function(e){
      this.triggerEvent('itemtap',e.currentTarget);
    }
  },
})