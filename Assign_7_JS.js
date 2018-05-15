
/*Looping a triangle*/

function loopTriangle() {
  for (let triangle = "#"; triangle.length <=7; triangle = triangle + "#"){
    console.log(triangle);
  }
}


/*Fizz Buzz*/
function fizzBuzz() {
  let i = 0;
  for (i = 1; i <= 100; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
          console.log("FizzBuzz");
        } else if (i % 5 === 0) {
          console.log("Buzz");
        } else if (i % 3 === 0) {
          console.log("Fizz");
        } else {
          console.log(i);
        }
      }
}

/* chess board */
function chessBoard(width, height) {
  const hash = '';
  const space = '_';
    for (let i = 0; i < height; i++) {
      hash += '\n';
      for (let j = 0; j < width; j++) {
        if((i +j) % 2 == 0) {
          hash  += space;
        } else {
          hash  += "#";
        }
      };
    };
  console.log(hash);
}

/* minimum */
function min(a,b) {
  if (a < b) return a;
  else return b;
}

/*Recursion*/
function isEven(num) {
  if (num === 0 ) {
    return true;
  } else if (num === 1) {
    return false;
  } else if (num < 0) {
    return (isEven(-num))
  } esle {
    return(isEven(num - 2));
  }
}

/* Bean counting version 1*/
function countBs(beans) {
  let countB = 0;
  for(let i=0; i < beans.length; i++){
    if (beans[i] === "B") {
      countB++;
    }
    return countB;
  }
}

/* Bean counting version ver 2*/
function countBs(beans, char) {
  let countB = 0;
  for(let i=0; i < beans.length; i++){
    if (beans[i] === char) {
      countB++;
    } else {
      countB += 0;
    }
  }
  return countB;
}


/*sum of ranges*/
function range(x, y) {
  let rangexy = [];

  for (let i = x; i <= y; i++) {
    rangexy.push(i);
  }
  return rangexy;
}


function sum(myRange) {
  let sumRange = 0;
  for (let i = 0; i < rangexy.length; i++)
    sumRange += myRange[i];
  }
  return sumRange;
}



/*reversing an array*/
function reverseArray (arr) {
  let reversedArray = [];
  for (let i = arr.length; i > 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reverseArray;
}


/*reverse array inplace*/
function reverseArrayInPlace (arr) {
  let tempArray = new Array;

  for (let i = 0; i < arr.length; i++) {
    tempArray[i] = arr[i];
  }

  for (let j = 0;  j < arr.length ; j++) {
    arr[j] = tempArray[arr.length-j];
  }
  return arr;
}


/* array to list */
function arrayToList (array) {
    let list = {};
    if (array.length) {
        list.value = array.shift();
        list.rest = ArrayToList(array);
    }
    return list;
}

/*list to array*/
function listToArray (list) {
    let array = [];
    while (list) {
        if (list.value != undefined) array.push(list.value);
        list = list.rest;
    }
    return array;
}

/* deep comparison*/
function deepComparison(Obj1, Obj2) {

  if (Obj1 === Obj2) return true;

  if (Obj1 == null || typeof Obj1 != "object" || Obj2 == null || typeof Obj2 != "object") 
      return false;

  let keysObj1 = Object.keys(Obj1),
  let keysObj2 = Object.keys(Obj2);

  if (keysObj1.length != keysObj2.length) return false;

  for (let key of keysObj1) {
    if (!keysObj2.includes(key) || !deepComparison(Obj1[key], Obj2[key])) return false;
  }

  return true;
}
