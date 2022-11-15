const express = require('express')
const cors = require('cors')

//This file is used for mockdata, server needs to be started, refer to readme in folder 'vuejs'

const app = express()

// app.use(express.json())
app.use(cors())


app.listen(3000)



app.get('/auctions', (req, res) => {
    res.json([
        {"id":1,"company":"Pelican GmbH","address":"8840 Musterstadt, Musterstraße 80","lowestBid":"7.058,00 EUR","volume":"57 Coca Cola 330ml, 60 Sprite 330ml, 5 Vodka 70cl, ","timeLeft":"96 hrs 89 mins","auctionEnd":"1637104457000"},
        {"id":2,"company":"Little GmbH","address":"3656 Musterstadt, Musterstraße 16","lowestBid":"3.020,00 EUR","volume":"52 Coca Cola 330ml, 27 Sprite 330ml, 8 Vodka 70cl, ","timeLeft":"29 hrs 62 mins","auctionEnd":"1651475931000"},
        {"id":3,"company":"Darter GmbH","address":"9443 Musterstadt, Musterstraße 98","lowestBid":"9.056,00 EUR","volume":"38 Coca Cola 330ml, 73 Sprite 330ml, 0 Vodka 70cl, ","timeLeft":"07 hrs 98 mins","auctionEnd":"1662400663000"},
        {"id":4,"company":"Black GmbH","address":"3641 Musterstadt, Musterstraße 70","lowestBid":"1.679,00 EUR","volume":"42 Coca Cola 330ml, 97 Sprite 330ml, 0 Vodka 70cl, ","timeLeft":"70 hrs 80 mins","auctionEnd":"1664821935000"},
        {"id":5,"company":"Southern GmbH","address":"0451 Musterstadt, Musterstraße 75","lowestBid":"6.922,00 EUR","volume":"70 Coca Cola 330ml, 53 Sprite 330ml, 1 Vodka 70cl, ","timeLeft":"99 hrs 13 mins","auctionEnd":"1654377160000"},
        {"id":6,"company":"Black-backed GmbH","address":"4886 Musterstadt, Musterstraße 72","lowestBid":"7.556,00 EUR","volume":"06 Coca Cola 330ml, 42 Sprite 330ml, 3 Vodka 70cl, ","timeLeft":"22 hrs 83 mins","auctionEnd":"1658521037000"},
        {"id":7,"company":"Slender GmbH","address":"8365 Musterstadt, Musterstraße 65","lowestBid":"7.668,00 EUR","volume":"11 Coca Cola 330ml, 29 Sprite 330ml, 2 Vodka 70cl, ","timeLeft":"23 hrs 32 mins","auctionEnd":"1654426536000"},
        {"id":8,"company":"Crane GmbH","address":"7801 Musterstadt, Musterstraße 33","lowestBid":"9.057,00 EUR","volume":"44 Coca Cola 330ml, 31 Sprite 330ml, 0 Vodka 70cl, ","timeLeft":"32 hrs 78 mins","auctionEnd":"1636734373000"},
        {"id":9,"company":"Asian GmbH","address":"0741 Musterstadt, Musterstraße 37","lowestBid":"6.159,00 EUR","volume":"44 Coca Cola 330ml, 24 Sprite 330ml, 9 Vodka 70cl, ","timeLeft":"93 hrs 78 mins","auctionEnd":"1665874769000"},
        {"id":10,"company":"Lily GmbH","address":"8666 Musterstadt, Musterstraße 23","lowestBid":"4.324,00 EUR","volume":"85 Coca Cola 330ml, 51 Sprite 330ml, 8 Vodka 70cl, ","timeLeft":"12 hrs 37 mins","auctionEnd":"1639138665000"},
        {"id":11,"company":"Heron GmbH","address":"4868 Musterstadt, Musterstraße 46","lowestBid":"2.005,00 EUR","volume":"61 Coca Cola 330ml, 13 Sprite 330ml, 5 Vodka 70cl, ","timeLeft":"26 hrs 35 mins","auctionEnd":"1665302254000"},
        {"id":12,"company":"Penguin GmbH","address":"5562 Musterstadt, Musterstraße 60","lowestBid":"4.455,00 EUR","volume":"89 Coca Cola 330ml, 18 Sprite 330ml, 9 Vodka 70cl, ","timeLeft":"19 hrs 51 mins","auctionEnd":"1663007202000"},
        {"id":13,"company":"Indian GmbH","address":"5893 Musterstadt, Musterstraße 25","lowestBid":"0.433,00 EUR","volume":"16 Coca Cola 330ml, 84 Sprite 330ml, 8 Vodka 70cl, ","timeLeft":"79 hrs 32 mins","auctionEnd":"1655456817000"},
        {"id":14,"company":"Heron GmbH","address":"5097 Musterstadt, Musterstraße 94","lowestBid":"8.291,00 EUR","volume":"28 Coca Cola 330ml, 03 Sprite 330ml, 1 Vodka 70cl, ","timeLeft":"09 hrs 96 mins","auctionEnd":"1643465902000"},
        {"id":15,"company":"Eagle GmbH","address":"7460 Musterstadt, Musterstraße 85","lowestBid":"0.235,00 EUR","volume":"07 Coca Cola 330ml, 11 Sprite 330ml, 7 Vodka 70cl, ","timeLeft":"37 hrs 44 mins","auctionEnd":"1640088567000"},
        {"id":16,"company":"Beisa GmbH","address":"2541 Musterstadt, Musterstraße 40","lowestBid":"1.679,00 EUR","volume":"94 Coca Cola 330ml, 23 Sprite 330ml, 9 Vodka 70cl, ","timeLeft":"09 hrs 89 mins","auctionEnd":"1646936589000"},
        {"id":17,"company":"Pheasant GmbH","address":"4483 Musterstadt, Musterstraße 43","lowestBid":"9.822,00 EUR","volume":"98 Coca Cola 330ml, 65 Sprite 330ml, 0 Vodka 70cl, ","timeLeft":"35 hrs 18 mins","auctionEnd":"1664110800000"},
        {"id":18,"company":"Jackal GmbH","address":"0874 Musterstadt, Musterstraße 74","lowestBid":"2.276,00 EUR","volume":"88 Coca Cola 330ml, 24 Sprite 330ml, 1 Vodka 70cl, ","timeLeft":"17 hrs 73 mins","auctionEnd":"1637621820000"},
        {"id":19,"company":"Glossy GmbH","address":"7047 Musterstadt, Musterstraße 65","lowestBid":"3.246,00 EUR","volume":"95 Coca Cola 330ml, 52 Sprite 330ml, 3 Vodka 70cl, ","timeLeft":"28 hrs 29 mins","auctionEnd":"1660566774000"},
        {"id":20,"company":"Baboon GmbH","address":"4953 Musterstadt, Musterstraße 57","lowestBid":"3.139,00 EUR","volume":"90 Coca Cola 330ml, 67 Sprite 330ml, 8 Vodka 70cl, ","timeLeft":"06 hrs 09 mins","auctionEnd":"1641846844000"},
        {"id":21,"company":"Red-breasted GmbH","address":"0106 Musterstadt, Musterstraße 46","lowestBid":"2.885,00 EUR","volume":"83 Coca Cola 330ml, 98 Sprite 330ml, 5 Vodka 70cl, ","timeLeft":"17 hrs 01 mins","auctionEnd":"1646097517000"},
        {"id":22,"company":"Fox GmbH","address":"9154 Musterstadt, Musterstraße 87","lowestBid":"8.064,00 EUR","volume":"46 Coca Cola 330ml, 00 Sprite 330ml, 1 Vodka 70cl, ","timeLeft":"06 hrs 64 mins","auctionEnd":"1650685828000"},
        {"id":23,"company":"North GmbH","address":"0208 Musterstadt, Musterstraße 98","lowestBid":"3.230,00 EUR","volume":"87 Coca Cola 330ml, 67 Sprite 330ml, 6 Vodka 70cl, ","timeLeft":"20 hrs 00 mins","auctionEnd":"1661288524000"},
        {"id":24,"company":"Capuchin GmbH","address":"1387 Musterstadt, Musterstraße 52","lowestBid":"5.990,00 EUR","volume":"02 Coca Cola 330ml, 93 Sprite 330ml, 1 Vodka 70cl, ","timeLeft":"76 hrs 10 mins","auctionEnd":"1653311934000"},
        {"id":25,"company":"Lion GmbH","address":"9518 Musterstadt, Musterstraße 53","lowestBid":"7.599,00 EUR","volume":"52 Coca Cola 330ml, 89 Sprite 330ml, 6 Vodka 70cl, ","timeLeft":"13 hrs 12 mins","auctionEnd":"1658427225000"}
    ])
    })

app.get('/faq', (req, res) => {
    res.json([
        {
            "id": 1,
            "question": "How to protect yourself from fraud?",
            "answer": "On the one hand, it is advisable to read the seller's reviews before buying. On the other hand, the free, so-called buyer protection helps against fraud. If the purchased item does not match the description or does not arrive at the buyer, he receives the entire purchase price, including shipping costs, back."
        },

        {
            "id": 2,
            "question": "How can I contact a seller?",
            "answer": "After buying an item, you can contact any seller using the \"Contact seller\" button. Before the purchase, not all sellers allow questions. If questions are accepted, the \"Contact seller\" button can also be found under the seller's details. For sellers who share their phone number, it can also be found under \"Contact seller\"."
        },
        {
            "id": 3,
            "question": "Why has my account been blocked?",
            "answer": "Reasons for suspending an account may include: Non-payment of fees or refunds to buyers, suspicion of unauthorized access to the account, suspected fraud, rule violations."
        }
    ])
})

app.get('/products', (req, res) => {
    res.json(
        [{"id":1,"brand":"Arctic","description":"Jointfir","fillingAmount":"909 ml","packaging":"06 pcs.","alcoholic":false},
            {"id":2,"brand":"Caracal","description":"Nakedstem","fillingAmount":"188 ml","packaging":"52 pcs.","alcoholic":true},
            {"id":3,"brand":"Bandicoot","description":"Tawny","fillingAmount":"311 ml","packaging":"26 pcs.","alcoholic":true},
            {"id":4,"brand":"Meerkat","description":"Clustered","fillingAmount":"663 ml","packaging":"48 pcs.","alcoholic":true},
            {"id":5,"brand":"Marshbird","description":"Longleaf","fillingAmount":"754 ml","packaging":"47 pcs.","alcoholic":false},
            {"id":6,"brand":"Otter","description":"Bastard","fillingAmount":"825 ml","packaging":"99 pcs.","alcoholic":false},
            {"id":7,"brand":"Tern","description":"Trumpetweed","fillingAmount":"869 ml","packaging":"94 pcs.","alcoholic":true},
            {"id":8,"brand":"Crab-eating","description":"Scabland","fillingAmount":"898 ml","packaging":"97 pcs.","alcoholic":true},
            {"id":9,"brand":"Lizard","description":"Davidson's","fillingAmount":"387 ml","packaging":"97 pcs.","alcoholic":false},
            {"id":10,"brand":"Reedbuck","description":"Carolina","fillingAmount":"277 ml","packaging":"38 pcs.","alcoholic":true},
            {"id":11,"brand":"Eurasian","description":"Montezuma","fillingAmount":"577 ml","packaging":"03 pcs.","alcoholic":false},
            {"id":12,"brand":"Ostrich","description":"Intermountain","fillingAmount":"766 ml","packaging":"57 pcs.","alcoholic":true},
            {"id":13,"brand":"Savanna","description":"Natal","fillingAmount":"953 ml","packaging":"15 pcs.","alcoholic":true},
            {"id":14,"brand":"Wood","description":"Silvery","fillingAmount":"764 ml","packaging":"53 pcs.","alcoholic":false},
            {"id":15,"brand":"American","description":"Fringed","fillingAmount":"087 ml","packaging":"83 pcs.","alcoholic":true},
            {"id":16,"brand":"Vine","description":"Pore","fillingAmount":"433 ml","packaging":"59 pcs.","alcoholic":false},
            {"id":17,"brand":"Mandras","description":"Yellow","fillingAmount":"006 ml","packaging":"98 pcs.","alcoholic":true},
            {"id":18,"brand":"White-tailed","description":"Purdy's","fillingAmount":"093 ml","packaging":"28 pcs.","alcoholic":true},
            {"id":19,"brand":"Flamingo","description":"Polynesian","fillingAmount":"752 ml","packaging":"66 pcs.","alcoholic":false},
            {"id":20,"brand":"Common","description":"New","fillingAmount":"796 ml","packaging":"16 pcs.","alcoholic":false},
            {"id":21,"brand":"American","description":"Mock","fillingAmount":"782 ml","packaging":"37 pcs.","alcoholic":false},
            {"id":22,"brand":"Sunbird","description":"Bulbous","fillingAmount":"907 ml","packaging":"38 pcs.","alcoholic":false},
            {"id":23,"brand":"Prairie","description":"Dissotis","fillingAmount":"517 ml","packaging":"39 pcs.","alcoholic":false},
            {"id":24,"brand":"Common","description":"Starry","fillingAmount":"550 ml","packaging":"60 pcs.","alcoholic":true},
            {"id":25,"brand":"Rattlesnake","description":"Lace-leaved","fillingAmount":"333 ml","packaging":"83 pcs.","alcoholic":true}]
    )
})


