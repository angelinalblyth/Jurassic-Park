const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Dinosaur World');
    dino1 = new Dinosaur('t-rex', 'carnivore', 50);
    dino2 = new Dinosaur('Triceratops', 'herbivore', 10);
    dino3 = new Dinosaur('Triceratops', 'herbivore', 10);
  })

  it('should have a name', function(){
    assert.strictEqual(park.name, 'Dinosaur World')
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 25);
  });

  it('should have a collection of dinosaurs', function(){
    assert.strictEqual(park.dinosaurs.length, 0)
    assert.deepStrictEqual(park.dinosaurs, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dino1);
    assert.strictEqual(park.dinosaurs.length, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dino1);
    park.removeDinosaur(dino1);
    assert.strictEqual(park.dinosaurs.length, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dino2);
    park.addDinosaur(dino1);
  //  console.log(park.dinosaurs);
    assert.strictEqual(park.mostPopular().species, 't-rex')
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);

    assert.strictEqual(park.speciesCount('Triceratops').length, 2);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);

    assert.strictEqual(park.removeSpecies('Triceratops').length, 1);
  });

});
