import env from '../../../env.example'

export default {
  methods: {
    getCode () {
      const githubAuthApi = 'https://github.com/login/oauth/authorize'
      const params = new URLSearchParams()

      params.append('client_id', env.clientId)
      params.append('scope', 'repo:status public_repo read:user user:follow')

      window.location.href = `${githubAuthApi}?${params}`
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')

    if (code) {
      try {
        const response = await fetch('https://webdev-api.loftschool.com/github', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            clientId: env.clientId, code, clientSecret: env.clientSecret
          })
        })

        const { token } = await response.json()

        localStorage.setItem('token', token)
        this.$router.replace({ name: 'feeds' })

        console.log(token)
      } catch (e) {
      }
    }
  }
}