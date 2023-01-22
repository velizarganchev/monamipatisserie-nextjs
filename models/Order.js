import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    client: {
        type: String,
        required: true,
        maxlength: 100
    },
    address: {
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
    },
    products: {
        type: [
            {
                name: {
                    type: String,
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                },
                // deliveries: {
                //     type: [
                //         {
                //             type: String
                //         }
                //     ]
                // }
            }]
    }
},
    //{ timestamps: true }
)

delete mongoose.connection.model['Order']
export default mongoose.models.Order || mongoose.model("Order", OrderSchema);