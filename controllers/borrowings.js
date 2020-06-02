module.exports = (app) =>{

    let Borrowing = require('../models/Borrowing');


    // Fonction show pour afficher un Livre : 
    function show(req, res) {

    Borrowing.findById(req.body.id, function (err, docs) {

        if(err) res.send(err);  
        else res.send(docs);


    });
   
  }
    
    
    function create(req, res){
        let newBorrowing = req.body
        Borrowing.create(newBorrowing, (err, borrowing) =>{
            if(err){
                res.send(err)
            }
            res.send(borrowing);
        })
    }

    function close(req,res){
        Borrowing.findByIdAndUpdate(
            req.body.id,
            {
                realReturnDate: req.body.realReturnDate
            },
            (err, data) => {
                if (err) console.log(err);
                else res.send(data);
            }
        );
    }


    function list(req,res){
        Musique.find({}, function (err, borrowing) {
            if (err) {
              res.send(err);
            } else {
              res.send(borrowing);
            }
        })
    };
    return { create, close, list } ;
};
