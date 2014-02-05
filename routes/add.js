var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
    res.render('add', {'data':data});
    var name = req.query.name;
    var desc = req.query.description;
    var image = "http://placekitten.com/g/500/500";
    data["friends"].push({
        'name': name,
        'description': desc,
        'imageURL': image
    });  
 };