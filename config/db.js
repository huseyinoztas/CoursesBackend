const mongoose=require('mongoose')

const connectDB=async ()=>{
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);

    const conn=await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDb Connected: ${conn.connection.host}`.magenta.bold);
}

module.exports=connectDB
