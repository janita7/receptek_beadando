// controllers/recipe.js
var express = require('express');
var router = express.Router();

router.get('/list', function (req, res) {
    req.app.models.recipe.find().then(function (recipes) {
        console.log(recipes);
        //megjelenítés
        res.render('recipes/list', {
            //recipes: decorateRecipes(recipes),
            messages: req.flash('info'),
        });
    });
});
router.get('/new', function (req, res) {
    var validationRecipes = (req.flash('validationRecipes') || [{}]).pop();
    var data = (req.flash('data') || [{}]).pop();
    
    res.render('recipes/new', {
        validationRecipes: validationRecipes,
        data: data,
    });
});
router.post('/new', function (req, res) {
    // adatok ellenőrzése
    req.checkBody('cim', 'Hibás cím').notEmpty().withMessage('Kötelező megadni!');
    req.sanitizeBody('leiras').escape();
    req.checkBody('leiras', 'Hibás leírás').notEmpty().withMessage('Kötelező megadni!');
    
    var validationRecipes = req.validationRecipes(true);
    console.log(validationRecipes);
    
    if (validationRecipes) {
        // űrlap megjelenítése a hibákkal és a felküldött adatokkal
        req.flash('validationRecipes', validationRecipes);
        req.flash('data', req.body);
        res.redirect('/recipes/new');
    }
    else {
        // adatok elmentése és a receptek megjelenítése
        req.app.models.recipe.create({
            title: req.body.cim,
            description: req.body.leiras
        })
        .then(function (recipe) {
            req.flash('info', 'Recept sikeresen felvéve!');
            res.redirect('/recipes/list');
        })
        .catch(function (err) {
            console.log(err);
        });
    }
});

module.exports = router;