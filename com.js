
const obj1 = {
    name: 'person 1',
    age: 5
  };
     
  const obj2 = {
    age: 5,
    name: 'person 1'
  };
  
  
  
  if(Object.keys(obj1).length==Object.keys(obj2).length){
      for(key in obj1) { 
          if(obj1[key] === obj2[key]) {
            console.log(obj1.name);
          }
          else {
            console.log(obj2.age
                );;
          }
      }
  }
 
 
  