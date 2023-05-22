const express = require('express')
require('dotenv').config;
const app = express()
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL:process.env.BASE_URL,
  clientID: process.env.BASE_URL.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})
