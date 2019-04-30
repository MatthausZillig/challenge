import axios from 'axios'
export default {
  name: 'Main',
  data () {
    return {
      total: '',
      arrProducts: []
    }
  },
  methods: {
    fillCart (event) {
      let value = document.querySelector('#value')
      this.total = value.textContent + ' | ' + this.total
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
