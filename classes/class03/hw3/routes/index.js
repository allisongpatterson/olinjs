var nav = function(req, res){
  res.render("home#nav", {"links": [
    "/cats/new",
    "/cats",
    "/cats/bycolor/:color",
    "/cats/delete/old"
    ]
  });
};


module.exports.nav = nav;