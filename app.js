express = require("express")
require("dotenv").config()
app = express()

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.send("Hello world");
});

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`);
});