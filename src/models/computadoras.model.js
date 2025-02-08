import { name } from "ejs";
import { model, Schema } from "mongoose";

const computadoraSchema = new Schema({
    customId: {
        required: true,
        unique: true,
        type: Number
    },
    cost: Number,
    price: Number,
    stock: Number,
    brand: String,
    model: String,
    processor: String,
    utility: String
}, {
    versionKey: false,
    timestamps: true
});

export default model('Computadora', computadoraSchema);