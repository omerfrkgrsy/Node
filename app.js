const express = require('express')
const otoparkRoutes = require('./src/routes/otoparkRoutes')
const yesilAlanRoutes = require('./src/routes/yesilAlanRoutes')
const mongoose = require('mongoose');
const app = express()

var DB_CONNECTION_STRING = "mongodb+srv://omer:1234@cluster0.5by3n.mongodb.net/?retryWrites=true&w=majority"

app.use("/otopark",otoparkRoutes)
app.use("/yesilalan",yesilAlanRoutes)

mongoose.connect(DB_CONNECTION_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

var server = app.listen( process.env.PORT || 3000, function(){
    console.log('Listening on port ' + server.address().port);
});

