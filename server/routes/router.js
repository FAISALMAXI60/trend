let express = require('express');
let router = express.Router();
let userController = require('../user-controller/usercontroller').userController;
let carouselController = require('../user-controller/usercontroller').carouselController;
let AddMainCatsController = require('../user-controller/usercontroller').AddMainCatsController;
const AddMainCatSchema = require('../db/models/AddMainCatSchema')
let passport = require('../authentication/authentication');
let multer = require('multer');
let bodyParser = require('body-parser')
router.use(bodyParser.urlencoded());
router.use(bodyParser.json());



let storageconf = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, require('path').resolve(__dirname, '../uploads/uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
let conf = multer({ storage: storageconf });

router.post('/uploads', conf.single('file'), function (req, res) {
    let newBody = JSON.parse(JSON.stringify(req.body));
    newBody.file = '/uploads/' + req.file.originalname
    carouselController.saveData(newBody, function (err, user) {
        if (err) {
            res.json({ success: false });
        } else {
            res.json({ success: true });
        }
    })
});


router.post('/signup', function (req, res) {
    console.log(req.body);
    userController.onSignup(req.body, function (err, user) {
        if (err) {
            res.json({ success: false });
            console.log(err)
        } else {
            res.json({ success: true });
        }
    })
});
router.post('/signin_adminpanel', function (req, resp, next) {
    console.log(req.body)
    passport.authenticate('local', function (err, user) {

        if (user) {

            req.login(user, (user) => {

                resp.json(req.user);


            })

        }
        else {
            resp.json({ success: false });
        }

    })(req, resp, next);


});


router.post('/addMainCats', function (req, res) {
    console.log(req.body);
    AddMainCatsController.addCats(req.body, function (err, user) {
        if (err) {
            res.json({ success: false });
            console.log(err)
        } else {
            res.json({ success: true });
        }
    })
});

router.get('/getMainCats', function (req, res) {
    AddMainCatSchema.find({}, function (err, cats) {
        if (err) {
            res.send(500);
        }
        else {
            res.json(cats);
        }
    });
});

module.exports = router;
