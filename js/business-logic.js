(function() {
  var BusinessLogic = function() {
    var bakery = {
      supplies: {
        flour: 4,
        eggs: 12,
        sugar: 17,
        spice: 5
      },
      goodRequirements: {
        cupcake: {
          flour: 2,
          eggs: 1,
          sugar: 1
        },
        cookie: {
          flour: 3,
          eggs: 2,
          sugar: 4,
          spice: 2
        }
        // TODO: Create required ingredients for cookie
      },
      make: function (goodType) {
        console.log('Attempting to make a:', goodType);
        var req = this.goodRequirements[goodType];
        var init = this.supplies;
        var make = true;

        for(var ingredient in req){
          if(init[ingredient] - req[ingredient] < 0) {
            make = false;
            alert("NOTZ ENOUGH STUFFZ")
            break;
          }
        }

        // TODO: Only make if we have enough ingredients
        if (make) {
          for(var ingredient in req){
            this.supplies[ingredient] -= req[ingredient];
          }
          // TODO: Reduce the bakery's supplies by the required amount
          this.updateIngredientsList();
          console.log('The bakery made a ' + goodType + '!');

  }
window.bl = new BusinessLogic();
})();
