/**
 * Created by namita on 5/9/16.
 */
var Landlord = require('./landlord.domain.js');
module.exports = function(app){
    app.get('/landlord', function (req, res) {
        Landlord.find(function (error, landlords) {
            if (error) {
                res.json({error: error})
            }
            else {
                res.json({landlords: landlords})
            }
        });
    });

    app.get('/landlord/:_id', function (req, res) {
        var _id = req.params._id;
        Landlord.findById(_id,function (error, landlord) {
            if (error) {
                res.json({error: error})
            }
            else {
                res.json({landlord: landlord})
            }
        });
    });

    app.delete('/landlord/:_id', function (req, res) {
        var _id = req.params._id;
        Landlord.remove({_id:_id},function (error, result) {
            if (error) {
                res.json({error: error})
            }
            else {
                res.json({result: result})
            }
        });
    });

    app.post('/landlord',function(req,res){
        var p2 = new Landlord(req.body);
        p2.save(function(error,result){
            if(error){
                res.json({error:error});
            }
            else{
                res.json({result:result});
            }
        });
    });

    app.put('/landlord/:_id', function (req, res) {
        var _id = req.params._id;
        Landlord.update({_id:_id},req.body,function (error, result) {
            if (error) {
                res.json({error: error})
            }
            else {
                res.json({result: result})
            }
        });
    });


};