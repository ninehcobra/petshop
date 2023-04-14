class ManageController {

    // [GET] /news/:slug
    show(req, res) {
        res.render('manage');
    }
}

module.exports = new ManageController();