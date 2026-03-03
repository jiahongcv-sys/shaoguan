const baseUrl = 'https://example.com/api';

function request(url, options = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${baseUrl}${url}`,
      method: options.method || 'GET',
      data: options.data || {},
      header: options.header || {
        'content-type': 'application/json'
      },
      success: resolve,
      fail: reject
    });
  });
}

module.exports = {
  request
};
