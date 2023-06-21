// // Good Luck 💪🏾

function Largest(arr) {
    const largenum = [];
  
    for (let i = 0; i < arr.length; i++) {
      let largestNum = arr[i][0];
  
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNum) {
          largestNum = arr[i][j];
        }
      }
  
      largenum.push(largestNum);
    }
  
    return largenum;
  }
  
  const numbers = [
    [7, 3, 8, 11],
    [54, 12, 43, 77],
    [16, 11, 8]
  ];
  const largenum = Largest(numbers);
  console.log(largenum);