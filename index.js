function convertCtoF(celsius) {
    let fahrenheit;
    fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
  }
  
 document.getElementById("demo").innerHTML  =  convertCtoF(30);




 function reverseString(str) {
    let reversestr = "";
    for(let i=str.length - 1; i>= 0; i--){
     
     reversestr = reversestr + str[i];
  
    }
    return reversestr;
  }
  
 document.getElementById("demo1").innerHTML =  reverseString("hello");



 function factorialize(num) {
    let fact = 1;
    for(let i=1; i<=num; i++){
      fact = fact * i;
    }
    return fact;
  }
  
  document.getElementById("demo2").innerHTML = factorialize(5);



  function findLongestWordLength(str) {
    let longestLength = 0;
    let currentLength = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        if (currentLength > longestLength) {
          longestLength = currentLength;
        }
        currentLength = 0;
      } else {
        currentLength++;
      }
    }
    if (currentLength > longestLength) {
      longestLength = currentLength;
    }
    
    return longestLength;
    }
    
    document.getElementById("demo3").innerHTML = findLongestWordLength("The quick brown fox jumped over the lazy dog");


    function largestOfFour(arr) {
        const results = [];
        for (let i = 0; i < arr.length; i++) {
          let largestNumber = arr[i][0];
          for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
              largestNumber = arr[i][j];
            }
          }
          results[i] = largestNumber;
        }
      
        return results;
      }
      document.getElementById("demo4").innerHTML = largestOfFour([33,23,45,54,67,87,99,334,132]);


      function confirmEnding(str, target) {
        return str.slice(str.length - target.length) === target;
        
      }
      
      document.getElementById("demo5").innerHTML =   confirmEnding("Bastian", "n");


      function repeatStringNumTimes(str, num) {
        let repeat = "";
        for(let i=0; i<num ; i++){
          repeat = repeat + str;
      
        }
        return repeat;
      }
      
      document.getElementById("demo6").innerHTML = repeatStringNumTimes("abc", 3);


      function truncateString(str, num) {
        if(str.length > num){
          return str.slice(0, num) + "...";
      
        }else{
        return str;
        }
      }
      document.getElementById("demo7").innerHTML = truncateString("abcdefg", 2);



      function findElement(arr, func) {
        let num = 0;
        for (let i = 0; i < arr.length; i++) {
          num = arr[i];
          if (func(num)) {
            return num;
          }
        }
      
        return undefined;
        
      }
      
      document.getElementById("demo8").innerHTML = findElement([1, 2, 3, 4], num => num % 2 === 0);


      function booWho(bool) {
        return typeof bool === "boolean";
       }
       
       document.getElementById("demo9").innerHTML =  booWho(null);

       function titleCase(str) {
        const newTitle = str.split(" ");
        const updatedTitle = [];
        for (let st in newTitle) {
          updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
        }
        return updatedTitle.join(" ");
      }
      
      document.getElementById("demo10").innerHTML =  titleCase("I'm a little tea pot");


      let dog = {
        name : "This is Dog object",
        numLegs : 4
      };
      document.getElementById("demo11").innerHTML = dog.name;

      let dog1 = {
        name: "Spot",
        numLegs: 4
      };
      document.getElementById("demo12").innerHTML = dog1.name;
      document.getElementById("demo13").innerHTML = dog1.numLegs;

      let dog2 = {
        name: "Spot",
        numLegs: 4,
      sayLegs: function(){return "This dog has 4 legs" +  "." }
      };
      
      document.getElementById("demo14").innerHTML = dog2.sayLegs();

      let dog3 = {
        name: "Spot",
        numLegs: 4,
        sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
      };
      
      document.getElementById("demo15").innerHTML = dog3.sayLegs();

     