/**
 * getIndex - Render the index page
 */
module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs',{title:'Welcome Page'});
    }
}