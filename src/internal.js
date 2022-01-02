const express = require('express');
const data = require('./people');

const router = express.Router();

router.get('/', (req, res) => {
    var id = process.env.IDENTIFIER || {"id": "undefined"};
    res.json(id);
});

router.get('/people', (req, res) => {
    res.status(200).json(getPeopleData(data.length - 1));
});

router.get('/people/:top', (req, res) => {
    res.status(200).json(getPeopleData(Number(req.params.top)));
});

function getPeopleData(top) {
    var retValue = data.map(({id, firstName, lastName, email, country, gender, ssn, dob}) => 
        ({id, firstName, lastName, email, country, gender, ssn, dob})).slice(0, top);
    return retValue;
}

module.exports = router;