const LABEL_SOURCE = require('../../utils/label_flow_source.js');

Page({

  data: {
    searchValue: '',
    bannerList: [{
      title: '测试1',
      imgUrl: 'https://shenpan.oss-cn-shanghai.aliyuncs.com/469/picture4.jpg'
    },
    {
      title: '测试2',
      imgUrl: 'https://shenpan.oss-cn-shanghai.aliyuncs.com/4626/25.jpg'
    },
    {
      title: '测试3',
      imgUrl: 'https://shenpan.oss-cn-shanghai.aliyuncs.com/469/picture4.jpg'
    }
    ],
    bannerTitle: '测试1',
    imgPlaceholder: 'https://shenpan.oss-cn-shanghai.aliyuncs.com/469/picture4.jpg',
    imgError: 'https://shenpan.oss-cn-shanghai.aliyuncs.com/469/picture4.jpg',
    imgUrl: 'https://shenpan.oss-cn-shanghai.aliyuncs.com/4626/25.jpg',
    labels: LABEL_SOURCE.labels
  },

  /*=========================================================
   * 搜索框相关
   *=========================================================*/
  /**
   * 搜索框输入监听
   */
  searchInput: function (e) {
    console.log('searchInput >>> ' + e.detail.value);
  },
  /**
   * 搜索框清除监听
   */
  searchClear: function (e) {
    console.log('searchClear');
  },
  /**
   * 搜索框右侧按钮点击监听
   */
  searchTab: function (e) {
    let _key = e.detail.key;
    let _value = e.detail.value;
    if (_key === 'search') {
      console.log('searchTab >>> search');
      console.log(e.detail);
    } else if (_key === 'back') {
      console.log('searchTab >>> back');
      console.log(e.detail);
    }
  },

  /*=========================================================
   * banner 组件相关
   *=========================================================*/
  /**
   * banner 页面切换监听
   */
  bannerChanged: function (e) {
    let _current = e.detail.current;
    this.setData({
      bannerTitle: this.data.bannerList[_current].title
    });
  },
  /**
   * banner item 点击监听
   */
  bannerItemTap: function (e) {
    wx.showToast({
      icon: 'none',
      title: '点击了第' + e.detail.dataset.index + '个页面',
      duration: 1000
    })
  },

  /*=========================================================
   * 图片组件相关
   *=========================================================*/
  /**
   * 图片加载成功
   */
  loadSuccess: function (e) {
    console.log('easy-image loadSuccess');
    console.log(e);
  },
  /**
   * 图片加载失败
   */
  loadFail: function (e) {
    console.log('easy-image loadFail');
    console.log(e);
  },

  /*=========================================================
   * 标签流组件相关
   *=========================================================*/
  /**
   * 标签点击监听
   */
  labelTap: function (e) {
    wx.showToast({
      icon: 'none',
      title: e.detail.dataset.item.name,
      duration: 1200
    });
  }
})