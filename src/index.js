const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route');


const app = express();
const { default: mongoose } = require('mongoose')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://myFirsh:aakash1234@cluster0.jhvz9b4.mongodb.net/JWT?retryWrites=true&w=majority", {
    useNewUrlParser: true
    
})
    .then(() => console.log("MongoDB is connected"))
    .catch(err => console.log(err))



app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});