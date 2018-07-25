const Park = function(name){
  this.name = name;
  this.ticketPrice = 25;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur= function(dinosaur){
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur= function(dinosaur){
  this.dinosaurs.pop(dinosaur);
}

Park.prototype.mostPopular = function(){
  //assigned the first object to a new variable.
  let mostPopular = this.dinosaurs[0];
  //loop over all the objects in the array
  for(dinosaur of this.dinosaurs){
    //find out what the number attraction number and check that against the current objects attraction number that is in the variable above.
    if(dinosaur.guestsAttractedPerDay > mostPopular.guestsAttractedPerDay){
    //if it is more then the variable changes to that object.
    mostPopular = dinosaur;}
  }
  //return what the most popular object is.
  return mostPopular;
}

Park.prototype.speciesCount = function(species) {
  let speciesCountArray = [];
  for(dinosaur of this.dinosaurs){
    if(dinosaur.species === species){
      speciesCountArray.push(dinosaur)
    }
  }return speciesCountArray;

}

Park.prototype.removeSpecies = function(species){

  // let i = this.dinosaurs.indexOf(dinosaur);
  //   this.dinosaurs.splice(i, 1);


  let removeSpecies = [];
  for(dinosaur of this.dinosaurs){
    if(dinosaur.species !== species){
      removeSpecies.push(dinosaur)
    }
  }return removeSpecies;
}



module.exports = Park;
