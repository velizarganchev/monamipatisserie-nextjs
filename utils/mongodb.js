import mongoose from "mongoose";

let cashed = global.mongoose;

if (!cashed) {
    cashed = global.mongoose = { con: null, promise: null };
};

async function dbConnect() {
    if (cashed.con) {
        return cashed.con;
    }

    if (!cashed.promise) {

        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
        };

        cashed.promise = mongoose.connect(process.env.MONGODB_URI, options).then(mongoose => {
            return mongoose;
        })
    }
    cashed.con = await cashed.promise;
    return cashed.con;
}

async function dbDisconnect() {
    await mongoose.disconnect();
    //console.log('DB connection completed');
};

const mongodb = { dbConnect, dbDisconnect };
export default mongodb;