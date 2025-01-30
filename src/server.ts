import express, { json } from 'express'

const app = express(); 

app.use(json()); 
app.listen(3333, () => console.log('🪄 app is running at port 3333!')); 