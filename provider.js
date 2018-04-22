
var provider = {
  suggest :  function(request, options) {
    var resultArray = [];
    var suggest = new ymaps.suggest(request);
    var result = suggest.then( items => {
      console.log('items before ' + items.length);
      var countryCode = '----';
      for (const i of items) {
        var gc =  new ymaps.geocode(i.value).then(res => {
          var firstGeo = res.geoObjects.get(0);
          countryCode = firstGeo.getCountryCode();
          // if(countryCode == 'RU')
          {
        
          }
        });
        resultArray.push({
          value: countryCode + ' ' + i.value,
          displayName: countryCode + ' ' + i.displayName
        });
    
      }
      console.log('items iterated');
      console.log(resultArray);
      return ymaps.vow.resolve(resultArray);
  
    });
        return ymaps.vow.resolve(result);
    
    
    
  }
}