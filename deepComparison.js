//I referred to coding help from the site found below:
//https://stackoverflow.com/questions/25456013/javascript-deepequal-comparison/25456134
//I commented throughout to display my understanding of what the code is doing

var deepEqual = function (param1, param2) {
  //if values are exactly the same, then true
  if (param1 === param2) 
    return true;
  
  //if the type of parameter is an object and not NULL,
  if ((typeof param1 == "object" && param1 != null) 
    && (typeof param2 == "object" && param2 != null)) {

    //used hasOwnProperty function if the property name in param1 is found in param2,
    for (var keyName in param1) {
      if (param2.hasOwnProperty(keyName))
      {  
        //and if recursive function passing actual values of property
        //to check if equal
        if (!deepEqual(param1[keyName], param2[keyName]))
          return false;
      }
      else
        return false;
    }
    return true;
  }
    return false;
}

//testing the function and the printing results
var objectExample = {here: {is: "an"}, object: 2}

console.log(deepEqual(objectExample, objectExample));
//should result in true and not do a deep comparision since
//the parameter names are same

console.log(deepEqual(objectExample, {here: 1, object: 2}));
//should return false, because eventhough the property names are the same, 
//the values are not equal

console.log(deepEqual(objectExample, {object: 2, here:{is:"an"}}));
//should be true because the property names are the same, 
//and then the values are the same, even when object is in different order

console.log(deepEqual(2, 2));
//true
console.log(deepEqual(2, 3));
//false

console.log(deepEqual(null, null));
//true