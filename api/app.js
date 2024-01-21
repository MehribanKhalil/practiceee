import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const app = express()
app.use(express.json())
app.use(cors())

const { Schema } = mongoose;

const productSchema = new Schema({
    image:{type:String,require:true},
    title:{type:String,require:true},
    price:{type:String,require:true},
    
});
const Product = mongoose.model('Product', productSchema);

app.get('/product', async ( req,res)=>{
    try {
        const product= await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({messaga:error})
    }
})

app.get('/product/:id', async ( req,res)=>{
    try {
        const product= await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({messaga:error})
    }
})


app.delete('/product/:id', async ( req,res)=>{
    try {
        const product= await Product.findByIdAndDelete(req.params.id)
        res.status(200).json('deleted')
    } catch (error) {
        res.status(500).json({messaga:error})
    }
})

app.put('/product/:id', async ( req,res)=>{
    try {
        const product= await Product.findByIdAndUpdate(req.params.id)
        res.status(200).json('updated')
    } catch (error) {
        res.status(500).json({messaga:error})
    }
})


app.post('/product', async ( req,res)=>{
    try {
        const product= new Product({...req.body})
        await product.save()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({messaga:error})
    }
})



const port = 8000
const url='mongodb+srv://tu833kmn0:mehriban098@cluster0.xewqdvo.mongodb.net/'

mongoose.connect(url).then(console.log( ' db connected'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})