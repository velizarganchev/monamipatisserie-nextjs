import mongoose from "mongoose";

let cashed = global.mongoose;

if (!cashed) {
    cashed = global.mongoose = { con: null, promise: null };
};

async function dbConnect() {
    if (cashed.con) {
        console.log('DB connection active');
        return cashed.con;
    }

    if (!cashed.promise) {

        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
        };

        cashed.promise = mongoose.connect(process.env.MONGODB_URI, options).then(mongoose => {
            console.log('DB connection started');
            return mongoose;
        })
    }
    cashed.con = await cashed.promise;
    return cashed.con;
}

async function dbDisconnect() {
    await mongoose.disconnect();
    console.log('DB connection completed');
};

const mongodb = { dbConnect, dbDisconnect };
export default mongodb;