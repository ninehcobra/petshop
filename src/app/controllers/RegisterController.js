class RegisterController {
    // [GET] /news
    index(req, res) {
        res.render('register',{layout:'login'});
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('NEWS DETAIL!!!');
    }
}

module.exports = new RegisterController();