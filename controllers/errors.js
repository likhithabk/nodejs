exports.error404=((req, res, next) => {
   
    res.render('404',{pageTitle:'page not found',path:'404'});
});