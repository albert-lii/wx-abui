// pages/main/main.js
Page({


  /**
   * 页面的初始数据
   */
  data: {
    searchValue: '',
    imgPlaceholder: 'https://shenpan.oss-cn-shanghai.aliyuncs.com/469/picture4.jpg',
    imgError: 'https://shenpan.oss-cn-shanghai.aliyuncs.com/469/picture4.jpg',
    imgUrl: 'https://shenpan.oss-cn-shanghai.aliyuncs.com/4626/25.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /*=========================================================
   * 搜索框相关
   *=========================================================*/
  /**
   * 搜索框输入监听
   */
  searchInput: function(e) {
    console.log('searchInput >>> ' + e.detail.value);
  },
  /**
   * 搜索框清除监听
   */
  searchClear: function(e) {
    console.log('searchClear');
  },
  /**
   * 搜索框右侧按钮点击监听
   */
  searchTab: function(e) {
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
   * 图片组件相关
   *=========================================================*/
  /**
   * 图片加载成功
   */
  loadSuccess: function(e) {
    console.log('easy-image loadSuccess');
    console.log(e);
  },
  /**
   * 图片加载失败
   */
  loadFail: function(e) {
    console.log('easy-image loadFail');
    console.log(e);
  },
})