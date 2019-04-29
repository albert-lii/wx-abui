Page({

  data: {

  },

  buttonTap: function(e) {
    let _id = e.currentTarget.id;
    wx.navigateTo({
      url: '../' + _id + '/' + _id,
    });
  },
})