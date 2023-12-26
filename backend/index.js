const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000

mongoURI = "mongodb://0.0.0.0:27017/gofoodmern"
mongoose.connect(mongoURI)
const conn = mongoose.connection
conn.once('open', () => {
  console.log("connected")
})
conn.once('error', (error) => {
  console.log(`${error}`)
})

// app.post('/',(req,res)=>{
//   const fetched_data =  mongoose.connection.db.collection("food_items")
//   fetched_data.find({}).toArray(async function (err, data) {
//     const foodCategory = await mongoose.connection.db.collection("foodCategory")
//     foodCategory.find({}).toArray(function (err, catData) {
//       if (err) console.log(err)
//       else {
   
//         global.food_items = data
//         global.foodCategory = catData
//         console.log( global.food_items)
//       }

//     })
//   })
// })

app.get('/', (req, res) => {
  res.send('Hello World!')
  
})
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept '
  )
  next()
})
app.use(express.json())
app.use('/api', require("./routes/CreateUser"))
app.use('/api', require("./routes/DisplayData"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


