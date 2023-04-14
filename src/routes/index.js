const newsRouter= require('./news.js')
const siteRouter= require('./site.js')
const loginRouter= require('./login.js')
const productRouter= require('./products')
const registerRouter=require('./register.js')
const shopRouter=require('./shops.js')
const userRouter=require('./users.js')
const manageRouter=require('./manage.js')

function route(app){
    app.use('/news', newsRouter);
    app.use('/products', productRouter);
    app.use('/home',siteRouter);
    app.use('/login', loginRouter);
    app.use('/register', registerRouter);
    app.use('/shops',shopRouter);
    app.use('/users',userRouter);
    app.use('/manage',manageRouter);
    app.use('/', loginRouter);

}

module.exports = route
