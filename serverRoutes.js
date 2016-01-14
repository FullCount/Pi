var express = require('express');
var router = express.Router();


//Hier routes laden

// Te vinden op localhost/data/licht/x/y
router.get("/licht/:id/:status", function(req,res)
{
    //TODO: GPIO vervangen met https://github.com/eugeneware/wiring-pi/blob/master/DOCUMENTATION.md
    res.end(JSON.stringify({ data : "Je hebt die shiat gevonden bitch"}));
});


// Zorg dat require in "server.js" de juiste klasse laadt.
module.exports = router;