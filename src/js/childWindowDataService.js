app.service('childService', function(MathService){
   this.square = function(a) {
      return MathService.multiply(a,a);
   }
});
