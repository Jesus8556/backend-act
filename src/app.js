const express = require("express")
const morgan = require("morgan")
const pkg = require("../package.json");
const createRoles = require("./libs/initialSetup") 
const garageRoutes = require("./routes/garage.routes")
const authRoutes = require("./routes/auth.routes")


const app = express();

createRoles()

app.set('pkg',pkg)
app.use(morgan('dev'));
app.use(express.json())

app.get('/',(req,res) =>{
    res.json({
        name:app.get("pkg").name,
        author: app.get('pkg').name,
        description:app.get("pkg").description,
        version:app.get("pkg").version

    })

})

app.use('/api/garage',garageRoutes)
app.use('/api/auth',authRoutes)


module.exports = app;
