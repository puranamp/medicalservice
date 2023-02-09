const frisby = require('frisby');

it('get current data', function () {
  return frisby.get('http://localhost:3000/items')
    .expect('status', 200);
});

it('Invalid Json Argument', function() {
  return frisby.post('http://localhost:3000/items', {
    patientName: "Pranav",
    patientAddress: "250 De Neve Dr.",
    hospitalName: "UCLA Health",
    dateOfService: "12/03/2023",
    billAmount: "321"
  })
    .expect('status', 400);
});

it('Valid Json Argument', function() {
  return frisby.post('http://localhost:3000/items', {
    patientName: "Pranav",
    patientAddress: "250 De Neve Dr.",
    hospitalName: "UCLA Health",
    dateOfService: "12/03/2023",
    billAmount: 321
  })
    .expect('status', 200);
});

it('Valid Json Argument', function() {
  return frisby.post('http://localhost:3000/items', {
    patientName: "Jeff",
    patientAddress: "251 De Neve Dr.",
    hospitalName: "UCLA Health",
    dateOfService: "12/04/2023",
    billAmount: 100001
  })
    .expect('status', 200);
});

it('Updated Database', function() {
  return frisby.get('http://localhost:3000/items')
    .expect('status', 200);
});