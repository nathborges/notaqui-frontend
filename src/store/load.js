export const loadStore = defineStore('load', () => {
    const loading = ref(false)
    const error = ref('false')
    function setLoading(value) {
      loading = value;
    }

    function setError(value) {
        error = value;
      }
  
    return { loading, error, setError, setLoading }
  })