import  express  from "express";
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors())

const dogs = [
    {
    name: 'Paco',
    breed: 'Chihuahua',
    age: 34,
},
{
    name: 'Buba',
    breed: 'Labrador',
    age: 56,
},

{
    name: 'Lucia',
    breed: 'Yorkie',
    age: 23,
},
{
    name: 'Bob',
    breed: 'Pittbul',
    age: 69,
}
]



app.get('/', (req,res) => res.json(dogs))

app.listen(4000, () => console.log('Api running ❤️'))