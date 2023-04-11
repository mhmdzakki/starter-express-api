const express = require('express')
const app = express()
app.get('/', (req, res) => {
    console.log("Just got a request!")
    res.status(200).json({hello: 'world'})
})
app.listen(process.env.PORT || 3000)
