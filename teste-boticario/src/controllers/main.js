import axios from 'axios'
export default {
  name: 'Main',
  data () {
    return {
      arrProducts: [],
      totalCart: 0
    }
  },
  methods: {
    fillCart (itemValue) {
      this.totalCart += itemValue
      console.log(itemValue)
    },
    formatCurrence (value) {
      return `R$ ${value.toFixed(2).split('.').join(',')}`
    }
  },
  mounted () {
    axios
      .get('/static/products.json')
      .then(response => {
        this.arrProducts = response.data
        localStorage.setItem('arr', JSON.stringify(this.arrProducts))
      })
      .catch(error => {
        console.log(error)
      })
  }
}
