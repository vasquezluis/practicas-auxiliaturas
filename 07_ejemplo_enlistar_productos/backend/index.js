// ejemplo basico de backend con express
// ruta del backend -> http://localhost:3000/students
// el backend devuelve
// message
// data -> array de objetos

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import fs from 'fs'

const app = express()
app.use(morgan('dev'))
app.use(cors())

app.get('/students', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) return console.log(err.message)

    try {
      const response = JSON.parse(data)

      res.status(200).json({ message: 'Students', data: response })
    } catch (error) {
      console.log(error.message)
    }
  })
})

app.listen(3000, () => {
  console.log('Server on port 3000')
})
