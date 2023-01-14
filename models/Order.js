import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    client: {
        type: String,
        required: true,
        maxlength: 100
    },
    adresse: {
        type: String,
        required: true,
        maxlength: 200
    },

    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        default: 0
    },
    payment: {
        type: Number,
        required: true
    }
},
    //{ timestamps: true }
)

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);