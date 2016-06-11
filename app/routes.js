// grab the nerd model we just created
var User = require('./models/user');

module.exports = function (app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/user', function (req, res) {

//        var user = new User({
//            email: "test.kmr@gmail.com",
//            password: "test"
//        });
//        user.save(function (err, fluffy) {
//            if (err) return console.error(err);
//            console.log("User save success");
//            res.send("Yaay !! Successs ... ");
//        });
        
        User.find({email:"askikh@gmail.com"},function(err,records){
            console.log(records);
            
            res.send(records[0].email + " : " + records[0].password);
        })
    });
    
    app.get('/api/save',function(req,res){
        var user = new User({
            email: "sucheta@gmail.com",
            password: "sucheta123"
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