let express = require("express");
let app = express();
app.use(express.json());

let data = {
    "bills": []
}

const validate = (obj) => {
    let valid = true;
    const types = {
        "patientName": "string",
        "patientAddress": "string",
        "hospitalName": "string",
        "dateOfService": "string",
        "billAmount": "number"
    }
    for (const key in types) {
        if (!(key in obj && typeof obj[key] == types[key])) {
            valid = false;
        }
    }
    if (valid) return true;
    return false;
};

app.get('/items', (req, res) => {
    res.send(JSON.stringify(data));
});

app.post('/items', (req, res) => {
    // if !valid, dont insert json
    if (validate(req.body)) {
        data.bills.push(req.body);
        res.send(req.body);
    } else {
        res.sendStatus(400); // bad argument
    }
});

app.listen(3000, () => {
    console.log(`App listening at http://localhost:${3000}`);
});