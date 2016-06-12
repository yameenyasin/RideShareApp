// grab the nerd model we just created
var User = require('./models/user');

module.exports = function (app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/login', function (req, res) {
        
         console.log(req.params);
         res.json({status:200});
//        User.find({email:"askikh@gmail.com"},function(err,records){
//            console.log(records);
//            
//            res.send(records[0].email + " : " + records[0].password);
//        })
    });
    
    app.post('/api/save',function(req,res){
        
        console.log(req.body);
        var user = new User({
            email: req.body.email,
            password: req.body.password
        });
        
        user.save(function (err, fluffy) {
            if (err) return console.error(err);
            console.log("User save success");
            res.send("Yaay !! Successs ... ");
        });
        
        
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    app.get('/partials/:filename', function (req, res) {
        console.log(req.params.filename);
        var filename = req.params.filename;
        if (!filename) return; // might want to change this
        res.sendFile(filename, {
                root: './public/views/partials'
        });
    });
    app.use(function (req, res) {
            res.sendFile('index.html', {
                root: './public'
            });
    });

};