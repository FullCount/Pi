var express = require('express');
var router = express.Router();


//Hier routes laden


// Te vinden op localhost/data/licht/x/y
router.get("/licht/:id/:status", function(req,res)
{
    //TODO: GPIO vervangen met
    //licht.zetAan();
    res.end(JSON.stringify({
        success: false,
        error: req.params.id + " heeft gefaald in status: " + req.params.status



    }));

});


//Temperatuur


// Zorg dat require in "server.js" de juiste klasse laadt.
module.exports = router;