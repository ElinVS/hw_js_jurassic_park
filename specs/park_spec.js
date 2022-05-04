const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  let park;
  

  
  beforeEach(function () {
    dinosaur1 = new Dinosaur('stegosaurus', 'herbivore', 100 )
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 200 )
    dinosaur3 = new Dinosaur('triceratops', 'herbivore', 300 )

    park = new Park ('Jurassic Park', 300, [dinosaur1,dinosaur2]);
    

  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 300);
  });

  it('should have a collection of dinosaurs', function(){
    const expected = [dinosaur1,dinosaur2]
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected)
  });


  it('should be able to add a dinosaur to its collection', function (){
    park.addDinosaur(dinosaur3)
    const expected = [dinosaur1,dinosaur2,dinosaur3]
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected)

  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(dinosaur1);
    const expected = [dinosaur2]
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual,expected)
  });

  xit('should be able to find the dinosaur that attracts the most visitors');

  xit('should be able to find all dinosaurs of a particular species',function(){
    
    const expected = dinosaur1
    const actual = park.findDinosaurBySpecies()

    assert.strictEqual(actual,expected)

  });

  it('should be able to calculate the total number of visitors per day', function () {
    const expected = 300;
    assert.strictEqual(park.calculateTotalNumVisitorsPerDay(), expected)

  });

  it('should be able to calculate the total number of visitors per year', function (){
    const expected = 109500
    const actual = park.calculateTotalNumVisitorsPerDay() * 365
    assert.strictEqual (actual, expected)
  });

  xit('should be able to calculate total revenue for one year', function () {

    //ticket price 300 * calculateTotalNumVisitorsPerDay * 365

    const expected = 32850000

    assert.strictEqual(actual,expected)
  });

});
