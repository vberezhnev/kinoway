/// IMPORTS ///
const express = require('express')
const dotenv = require('dotenv')

const axios = require('axios')

/// VARIABLES ///
const app = express()
const port = 3001 || process.env.PORT

dotenv.config({
  path: './.env',
});

var info: any

axios.get(`https://api.kinopoisk.dev/movie?field=rating.kp&search=7-10&field=year&search=2017-2020&field=typeNumber&search=2&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${process.env.TOKEN_KINOPOISK}`)
  .then((res: any) => {
			info = JSON.stringify(res)
	})
  .catch((error: string) => {
			console.log(error);
  })

app.get('/', ({ req, res }: any) => {
		res.send("message": info)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
