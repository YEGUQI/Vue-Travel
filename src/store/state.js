// eslint-disable-next-line no-unused-vars
let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) { }

export default {
  city: defaultCity
}
