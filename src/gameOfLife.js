const x = 10;
let arr = [];

// Create table x*x
for (let i = 0; i < x; i++) {
  arr[i] = [];
  for (let k = 0; k < x; k++) {
    arr[i][k] = 0;
  }
}

// Check vecinos
const checkVecinos = (myArr, posY, posX) => {
  let vecinos = 0;
  for (let i = 0; i < myArr.length; i++) {
    for (let k = 0; k < myArr.length; k++) {
      if (i >= posY - 1 && i <= posY + 1 && k >= posX - 1 && k <= posX + 1) {
        if (i !== posY || k !== posX) {
          if (myArr[i][k] === 1) {
            vecinos++;
          }
        }
      }
    }
  }
  return (vecinos === 2 && myArr[posY][posX] === 1) || vecinos === 3;
};

// Copy array
const copyArr = (myArr) => {
  const newArr = [];
  for (let i = 0; i < x; i++) {
    newArr[i] = [];
    for (let k = 0; k < x; k++) {
      newArr[i][k] = myArr[i][k];
    }
  }
  return newArr;
};

// Mod array
const modArr = (myArr) => {
  const newArr = copyArr(myArr);
  for (let i = 0; i < myArr.length; i++) {
    for (let k = 0; k < myArr.length; k++) {
      if (checkVecinos(myArr, i, k)) {
        // console.log(`[${i}] [${k}]`);
        // console.log("im in madafaka");
        newArr[i][k] = 1;
      } else {
        newArr[i][k] = 0;
      }
    }
  }
  return newArr;
};

arr[1][0] = 1;
arr[1][1] = 1;
arr[1][2] = 1;

arr[0][8] = 1;
arr[0][9] = 1;
arr[1][9] = 1;

arr[0][7] = 1;
arr[1][8] = 1;
arr[2][8] = 1;
arr[2][9] = 1;

console.table(arr);
for (let c = 0; c < 6; c++) {
  arr = modArr(arr);
  console.table(arr);
}

// console.table(arr);
// console.table(modArr(arr));
// console.table(modArr(modArr(arr)));
