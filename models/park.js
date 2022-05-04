const Park = function(name, ticketPrice, collectionOfDinosaurs ) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = collectionOfDinosaurs;
}

Park.prototype.addDinosaur = function(dino) {
    this.collectionOfDinosaurs.push(dino);
};

Park.prototype.removeDinosaur = function (dino) {
    const indexOfCollection= this.collectionOfDinosaurs.indexOf(dino);
    this.collectionOfDinosaurs.splice(indexOfCollection,1 )
}

Park.prototype.findDinosaurBySpecies = function () {
    

    for (let dinosaur of this.collectionOfDinosaurs){
        if (dinosaur.species === 'stegosaurus'){  
        } 
    }
        return dinosaur     
}

Park.prototype.calculateTotalNumVisitorsPerDay = function (){
    let total = 0;

    for(const dinosaur of this.collectionOfDinosaurs) {
        total += dinosaur.guestsAttractedPerDay
    }

    return total;
}




    



module.exports = Park;

