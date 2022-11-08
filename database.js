//DataBase
//Base de datos
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://Abdisito:FgY2hc-UQAAb-k4@datacinema.tzaayzz.mongodb.net/cinema?retryWrites=true&w=majority`,
{useNewUrlParser: true, useUnifiedTopology: true})

//mongodb+srv://Abdisito:FgY2hc-UQAAb-k4@datacinema@datacinema.tzaayzz.mongodb.net/?retryWrites=true&w=majority

.then(()=>console.log(`dataBase connect`))
.catch(e=>console.log(e))
