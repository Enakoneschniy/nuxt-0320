import Vue from 'vue'

Vue.filter('truncate', function (value, maxLength, lastSymbol = '...') {
  if (value.length > maxLength) {
    return value.substr(0, maxLength - lastSymbol.length) + lastSymbol
  }
  return value
})
