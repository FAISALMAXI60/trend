let mongoose = require("mongoose");
let AddMainCats = mongoose.Schema({

    MainCategory: {
        type: String,
        required: true
    },
    SubCategory: {
        type: Array,
        required: true
    },
 
});
let AddMainCatSchema = mongoose.model("AddMainCategories", AddMainCats);
module.exports = AddMainCatSchema;