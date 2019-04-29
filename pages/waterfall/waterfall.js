const WATERFALL_SOURCE = require('../../utils/waterfall_source.js');

Page({
  data: {
    pageNo: 0,
    pageSrc: []
  },

  onLoad: function(options) {
    this.setData({
      pageSrc: WATERFALL_SOURCE.source
    });
  },

  onPullDownRefresh: function() {
    wx.showNavigationBarLoading();
    this.setData({
      pageSrc: WATERFALL_SOURCE.source
    }, () => {
      wx.hideNavigationBarLoading();
    });
  },

  onReachBottom: function() {
    let _pageNo = this.data.pageNo + 1;
    this.setData({
      pageNo: _pageNo,
      pageSrc: this.data.pageSrc
    });
  }
})