/*
Card CRUD

Card
    ID              Uniq card id in the datastore
    OWNER           Owner
    TITLE           Title
    CONTENT         Content
    TIMESTAMP       Last modified

API endpoints
    ROUTE               VERV    ACTION
    /cards              GET     Get all the cards.
    /cards              POST    Create a cards.
    /cards/:cardId      GET     Get a single cards.
    /cards/:cardId      PUT     Update a cards with new info.
    /cards/:cardId      DELETE  Delete a cards.
*/

var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var cors = require('cors');

var app = express()

var cards = []; // TODO: replace this with propper database


var populateTestCards = function() {
    var maxTestCards = 5;
    for (var i = 1; i <= maxTestCards; i++) {
        cards.push({
            id        : i,
            title     : "Card title #" + i,
            content   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            timestamp : Date.now(),
            owner     : "adminit.ml"
        });
    }
}
populateTestCards();

// Enable Access-Control-Allow-Origin
// (needed to link api. with www.)
app.use(cors());

app.use(express.static(__dirname + '/web'));

// parse application/json 
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))


app.use(cookieParser());

var server = app.listen(process.env.PORT || 3000, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log('Example app listening at http://%s:%s', host, port)
})

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/web/index.html');
});



app.get('/cards', function (req, res) {
    res.json( cards );
});


app.get('/cards/:cardId', function (req, res) {
    var cardId = req.params.cardId;
    var cardStored = null;

    if ( cardId ) {
        cards.forEach(function(card){
            if (card.id == cardId) {
                cardStored = card;
            }
        });
    }

    if (cardStored) {
        res.json( cardStored );
    } else {
        res.status(404).json( { "message": "nothing here! (>_<)" } )
    };

});

app.post('/cards', function (req, res) {

    var cardIdNew = 0;
    cards.forEach(function(card){
        if (card.id > cardIdNew) {
            cardIdNew = card.id;
        }
    });
    cardIdNew++;

    var card = {
        id        : cardIdNew,
        timestamp : Date.now(),
        title     : ( req.body.title )   ? req.body.title : "",
        content   : ( req.body.content ) ? req.body.content : "",
        owner     : ( req.body.owner )   ? req.body.owner : ""
    }

    cards.push( card );

    res.json( card );

});

app.put('/cards/:cardId', function (req, res) {

    var cardId = req.params.cardId;
    var cardStored = null;

    var cardIndex = 0;
    if ( cardId ) {
        for (cardIndex = 0; cardIndex < cards.length; cardIndex++ ) {
            if ( cards[cardIndex].id == cardId ) {
                cardStored = cards[cardIndex];
                break;
            }
        }
    }

    if (cardStored) {

        var card = {
            id        : cardStored.id,
            timestamp : Date.now(),
            title     : ( req.body.title )   ? req.body.title   : cardStored.title,
            content   : ( req.body.content ) ? req.body.content : cardStored.content,
            owner     : ( req.body.owner )   ? req.body.owner   : cardStored.owner
        }

        cards[ cardIndex ] = card;

        res.json( card );
    } else {
        res.status(404).json( { "message": "nothing here! (>_<)" } )
    };

});


app.delete('/cards/:cardId', function (req, res) {
    var cardId = req.params.cardId;
    var cardStored = null;

    var cardIndex = 0;
    if ( cardId ) {
        for (cardIndex = 0; cardIndex < cards.length; cardIndex++ ) {
            if ( cards[cardIndex].id == cardId ) {
                cardStored = cards[cardIndex];
                break;
            }
        }
    }

    if (cardStored) {

        cards.splice( cardIndex, 1 );

        res.json( { "message": "deleted", "card": cardStored.id }  );

    } else {
        res.status(404).json( { "message": "nothing here! (>_<)" } )
    };
});