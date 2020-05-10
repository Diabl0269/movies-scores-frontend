global.localStorage = {
  getItem: function (key) {
    return this[key] || null
  },

  setItem: function (key, value) {
    this[key] = value.toString()
  },

  removeItem: function (key) {
    delete this[key]
  }
}
