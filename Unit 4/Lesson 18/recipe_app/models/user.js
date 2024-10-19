const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        first: {
            type: String,
            trim: true
        },
        last: {
            type: String,
            trim: true
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    zipCode: {
        type: Number,
        min: [1000, "Zip code too short"],
        max: 99999
},
    password: {
        type: String,
        required: true
},
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
    subscribedAccount: { type: Schema.Types.ObjectId, ref: "Subscriber" }
}, 
{

    //keeps track of document was creared and/or updated
    timestamps: true
}
);
userSchema.virtual("fullName").get(function (){
    return `${this.name.first} ${this.name.last}`;
});
module.exports = mongoose.model("User", userSchema);
