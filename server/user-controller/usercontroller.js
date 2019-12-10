let User = require('../db/models/UserSchema');
let AddMainCatSchema = require('../db/models/AddMainCatSchema');
let CarouselProducts = require('../db/models/carouselSchema');


let userController = {
    onSignup: (body, next) => {
        let newUser = new User(body);
        newUser.save(function (err, user) {
            next(err, user);
        })
    }

}

let AddMainCatsController = {
    addCats: (body, next) => {
        let AddMainCats = new AddMainCatSchema(body);
        AddMainCats.save(function (err, user) {
            next(err, user);
        })
    }
}

let carouselController = {
    saveData: (body, next) => {
        let prdDetail = new CarouselProducts(body);
        prdDetail.save(function (err, user) {
            next(err, user);
        })
    }

}


module.exports.userController = userController;
module.exports.AddMainCatsController = AddMainCatsController;
module.exports.carouselController = carouselController;


