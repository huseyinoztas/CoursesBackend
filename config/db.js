import dotenv from 'dotenv';

const mongoose=require('mongoose')

const connectDB=async ()=>{
    dotenv.config();
    const conn=await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDb Baglandi: ${conn.connection.host}`.magenta.bold);
}

module.exports=connectDB
