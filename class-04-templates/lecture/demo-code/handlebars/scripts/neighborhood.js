var neighborhoods = [];

function Neighborhood (opts) {
  for (key in opts) this[key] = opts[key];
};

//this will allow handlebars to utilize the template
Neighborhood.prototype.toHtml = function() {
  //picks up on the literal html of the template that we defined in the script head tag. captures line 8-13 of index.html
  var source = $('#neighborhood-template').html();
  var template = Handlebars.compile(source); //AKA templateFunction
  console.log(this); //the this refers to the neighborhood objects
  return template(this); //template needs a context object. returns the result of invoking template with this. (Template is a function)
};

neighborhoodDataSet.forEach(function(neighborhoodObject) {
  neighborhoods.push(new Neighborhood(neighborhoodObject));
});

neighborhoods.forEach(function(ourNewInstantiatedNeighborhoodObject){
  $('#neighborhoods').append(ourNewInstantiatedNeighborhoodObject.toHtml());
});
