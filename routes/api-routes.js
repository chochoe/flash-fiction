var db = require("../models");

module.exports = function(app) {
    // get story by ID
    app.get("/api/story/:id", function(req, res) {
        db.stories.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbStories) {
            res.json(dbstories);
        })
    });

    // get author by name
    app.get("/api/author/:name", function(req, res) {
        db.stories.findOne({
            where: {
                name: req.params.name
            }
        }).then(function(dbStories) {
            res.json(dbstories);
        })
    });

    // get snippets by parent
    app.get("/api/snippets/:id", function(req, res) {
        db.snippets.findAll({
            where: {
                parentID: req.params.id
            }
        }).then(function(dbsnippets) {
            res.json(dbsnippets);
        })
    });

    // get latest stories
    app.get("/api/latest/:offset?", function(req, res) {
        db.snippets.findAll({
            orderBy: [
                [id, DESC]
            ],
            limit: 5
            //offset: req.params.offset
        }).then(function(dbsnippets) {
            res.json(dbsnippets);
        })
    });

    app.post("/api/newStory", function (req, res){
    	console.log(req.body);
    	db.stories.create({
    		title: req.body.title,
    		snipppet: req.body.snippet,
    		author: req.body.author,
    		authorID: req.body.authorID,
    		genre: req.body.genre
    	})
    })

};