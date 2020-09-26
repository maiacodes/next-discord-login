// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    var baseURL = "https://discord.com/api/oauth2/authorize?response_type=code&"

    // Client ID
    baseURL = baseURL + `client_id=${process.env.CLIENT_ID}&`

    // Scopes
    baseURL = baseURL + `scope=identify&`

    // Redirect URL
    baseURL = baseURL + `redirect_uri=${process.env.WEBSITE_URL}/auth/discord`
    res.statusCode = 200
    res.json({ url: baseURL })
  }
  