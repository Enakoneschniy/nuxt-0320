export default {
  data: () => ({
    message: 'Hello from Mixin!!!'
  }),
  methods: {
    showMessage () {
      alert(this.message)
    }
  }
}
