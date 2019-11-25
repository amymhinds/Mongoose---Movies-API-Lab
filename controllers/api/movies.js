var Movie = require('../../models/movie');


module.exports = {
    index, 
    show, 
    create,
    update,
    delete: deleteOne
};

function index(req, res){
    Movie.find({}).populate('cast')
    .exec(function(err, movies){
        res.status(200).json(movies);
    });
}

function show(req, res){
    Movie.findById(req.params.id).populate('cast')
    .exec(function(err, movies){
        res.status(200).json(movies);
    });
}

function create(req, res){
    Movie.create(req.body, function(err, movies){
        if(err){
            return res.status(400).json(err);
        } else {
            return res.status(201).json(movies);
        }
    })
}

function update(req, res){
    Movie.findByIdAndUpdate(req.params.id, req.body, {new: true}, 
        function(err, movies){
            res.status(200).json(movies);
        })
}

function deleteOne(req, res){
    Movie.findByIdAndDelete(req.params.id, function(err, movies){
        res.status(200).json(movies);
    })
}