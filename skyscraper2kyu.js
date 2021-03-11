function solvePuzzle(clues) {
  // Start your coding here...
 
   var a0 =  [1, 2, 3, 4, 5, 6]
   var a1 =  [1, 2, 3, 4, 5, 6]
   var a2 =  [1, 2, 3, 4, 5, 6]
   var a3 =  [1, 2, 3, 4, 5, 6]
   var a4 =  [1, 2, 3, 4, 5, 6]
   var a5 =  [1, 2, 3, 4, 5, 6]
   var rowA = [a0, a1, a2, a3, a4, a5]
   var b0 =  [1, 2, 3, 4, 5, 6]
   var b1 =  [1, 2, 3, 4, 5, 6]
   var b2 =  [1, 2, 3, 4, 5, 6]
   var b3 =  [1, 2, 3, 4, 5, 6]
   var b4 =  [1, 2, 3, 4, 5, 6]
   var b5 =  [1, 2, 3, 4, 5, 6]
   var rowB = [b0, b1, b2, b3, b4, b5]
   var c0 =  [1, 2, 3, 4, 5, 6]
   var c1 =  [1, 2, 3, 4, 5, 6]
   var c2 =  [1, 2, 3, 4, 5, 6]
   var c3 =  [1, 2, 3, 4, 5, 6]
   var c4 =  [1, 2, 3, 4, 5, 6]
   var c5 =  [1, 2, 3, 4, 5, 6]
   var rowC = [c0, c1, c2, c3, c4, c5]
   var d0 =  [1, 2, 3, 4, 5, 6]
   var d1 =  [1, 2, 3, 4, 5, 6]
   var d2 =  [1, 2, 3, 4, 5, 6]
   var d3 =  [1, 2, 3, 4, 5, 6]
   var d4 =  [1, 2, 3, 4, 5, 6]
   var d5 =  [1, 2, 3, 4, 5, 6]
   var rowD = [d0, d1, d2, d3, d4, d5]
   var e0 =  [1, 2, 3, 4, 5, 6]
   var e1 =  [1, 2, 3, 4, 5, 6]
   var e2 =  [1, 2, 3, 4, 5, 6]
   var e3 =  [1, 2, 3, 4, 5, 6]
   var e4 =  [1, 2, 3, 4, 5, 6]
   var e5 =  [1, 2, 3, 4, 5, 6]
   var rowE = [e0, e1, e2, e3, e4, e5]
   var f0 =  [1, 2, 3, 4, 5, 6]
   var f1 =  [1, 2, 3, 4, 5, 6]
   var f2 =  [1, 2, 3, 4, 5, 6]
   var f3 =  [1, 2, 3, 4, 5, 6]
   var f4 =  [1, 2, 3, 4, 5, 6]
   var f5 =  [1, 2, 3, 4, 5, 6]
   var rowF = [f0, f1, f2, f3, f4, f5]
   var wholeBoardRow = [rowA, rowB, rowC, rowD, rowE, rowF];
   var col0 = [a0, b0, c0, d0, e0, f0];
   var col1 = [a1, b1, c1, d1, e1, f1];
   var col2 = [a2, b2, c2, d2, e2, f2];
   var col3 = [a3, b3, c3, d3, e3, f3];
   var col4 = [a4, b4, c4, d4, e4, f4];
   var col5 = [a5, b5, c5, d5, e5, f5];
   var wholeBoardCol = [col0, col1, col2, col3, col4, col5]
   var actualBord = [
   [0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0]
   ]
 function getCol(n) {
     return [wholeBoardRow[0][n], wholeBoardRow[1][n], wholeBoardRow[2][n], wholeBoardRow[3][n], wholeBoardRow[4][n], wholeBoardRow[5][n]]
 }
   var placeSkyscraper = function (coordCol, coordRow, height) {
       if (height === 5) {
           console.log('hi')
       }
       for (let p = 0; p < 6; p++) {
          
           let rem = wholeBoardRow[coordRow][p].indexOf(height);
           if (rem >= 0) {
         wholeBoardRow[coordRow][p].splice(rem, 1); 
           }
           let remc = getCol(coordCol)[p].indexOf(height);
           if (remc >= 0) {
         getCol(coordCol)[p].splice(remc, 1); 
           }
       }
       wholeBoardRow[coordRow][coordCol].splice(0, 6, height)
       
   }
   var elimFromConstraints = function (clue1, roworcol, bflag, cc) {
   if (!bflag) {
       if (clue1 === 1) {
           placeSkyscraper(cc[0],cc[1] , 6)
       } else {
 for (let y = 2; y <= 6; y++) {
      for (let x = 0; x <= (4-((6-clue1)+(6-y))); x++) {
          let ind = roworcol[x].indexOf(y)
          if (ind >= 0){
        roworcol[x].splice(ind, 1)
          }
      }
    }}
 } else {
     if (clue1 === 1) {
           placeSkyscraper(cc[0],cc[1] , 6)
       } else {
    for (let y = 2; y <= 6; y++) {
      for (let x = 0; x <= (4-((6-clue1)+(6-y))); x++) {
       let rInd = roworcol[5-x].indexOf(y)
       if (rInd >= 0) {
        roworcol[5-x].splice(roworcol[5-x].indexOf(y), 1)
       }}
      }
    }
 }
    }
  var topColClues = clues.slice(0, 6);
  var rightRowClues = clues.slice(6, 12);
  var bottomColClues = clues.slice(12, 18);
  var leftRowClues = clues.slice(18, 24);
  for (let i = 0; i < 6; i++) {
    if (topColClues[i] !== 0) {
      elimFromConstraints(topColClues[i], getCol(i), false, [i, 0])
    }
    if (rightRowClues[i] !== 0) {
      elimFromConstraints(rightRowClues[i], wholeBoardRow[i], true, [5, i])
    }
     if (bottomColClues[i] !== 0) {
      elimFromConstraints(bottomColClues[i], getCol(5-i), true, [5-i, 5])
    }
    if (leftRowClues[i] !== 0) {
      elimFromConstraints(leftRowClues[i], wholeBoardRow[5-i], false, [0, 5-i])
    }
  }
  
  //console.log(wholeBoardRow)
 var posrows = constraintLists => {
     var results = [];
    function helper(arr, i) {
    for (let value of constraintLists[i]) {
      let copy = arr.slice()
      if (arr.includes(value)) continue
      copy.push(value)

      if (i === constraintLists.length - 1) {
        results.push(copy)
      } else {
        helper(copy, i + 1)
      }
    }
  }
  helper([], 0)
  return results
  }
  var possiblerowList;
  var possiblerowA;
  var possiblerowB;
  var possiblerowC;
  var possiblerowD; 
  var possiblerowE; 
  var possiblerowF; 
  for (let nn = 0; nn < 16; nn++) {
   possiblerowA = posrows(wholeBoardRow[0])
   possiblerowB = posrows(wholeBoardRow[1])
   possiblerowC = posrows(wholeBoardRow[2])
   possiblerowD = posrows(wholeBoardRow[3])
   possiblerowE = posrows(wholeBoardRow[4])
   possiblerowF = posrows(wholeBoardRow[5])
   possiblerowList = [possiblerowA, possiblerowB, possiblerowC, possiblerowD, possiblerowE, possiblerowF]


const countVisible = sequence => {
  let visible = 0
  let max = 0
  sequence.forEach(value => {
    if (value > max) {
      visible += 1
      max = value
    }
  })
  return visible
}

const passClueCheck = (sequence, clue) => {
  if (clue === 0) return true
  return clue === countVisible(sequence)
}

for (let v1 = 0; v1 < 6; v1++) {
    for (let v2 = 0; v2 < possiblerowList[v1].length; v2++) {
        if ((passClueCheck(possiblerowList[v1][v2], clues[23-v1])) !== true) {
            console.log(v2, possiblerowList[v1][v2])
            possiblerowList[v1].splice(v2, 1)
            v2--
        }
    }
}
for (let v1 = 0; v1 < 6; v1++) {
    for (let v2 = 0; v2 < possiblerowList[v1].length; v2++) {
        if ((passClueCheck(possiblerowList[v1][v2].slice(0, 6).reverse(), clues[6+v1])) !== true) {
            possiblerowList[v1].splice(v2, 1)
            v2--
        }
    }
}

 //console.log(wholeBoardCol) 
 //console.log(wholeBoardRow) //}



 //console.log(possiblerowList)
  var posCol0 = posrows(getCol(0));
  var posCol1 = posrows(getCol(1));
  var posCol2 = posrows(getCol(2));
  var posCol3 = posrows(getCol(3));
  var posCol4 = posrows(getCol(4));
  var posCol5 = posrows(getCol(5));
  var possibleColList = [posCol0, posCol1, posCol2, posCol3, posCol4, posCol5]
 for (let v1 = 0; v1 < 6; v1++) {
    for (let v2 = 0; v2 < possibleColList[v1].length; v2++) {
        if ((passClueCheck(possibleColList[v1][v2], clues[v1])) !== true) {
            possibleColList[v1].splice(v2, 1)
            v2--
        }
    }
}
for (let v1 = 0; v1 < 6; v1++) {
    for (let v2 = 0; v2 < possibleColList[v1].length; v2++) {
        if ((passClueCheck(possibleColList[v1][v2].slice(0, 6).reverse(), clues[17-v1])) !== true) {
            possibleColList[v1].splice(v2, 1)
            v2--
        }
    }
}

for (let y = 0; y < 6; y++) {
for (let g1 = 0; g1 < 6; g1++) {
    let tb = new Set();
    for (let g2 = 0; g2 < possibleColList[g1].length; g2++) {
      tb.add(possibleColList[g1][g2][y])
     
    }
    //console.log(tb)
    wholeBoardRow[y][g1] = Array.from(tb)
}
} 
for (let y1 = 0; y1 < 6; y1++) {
for (let g11 = 0; g11 < 6; g11++) {
    let tb = new Set();
    for (let g22 = 0; g22 < possiblerowList[g11].length; g22++) {
      tb.add(possiblerowList[g11][g22][y1])
    }
   
    var tst =  Array.from(tb)
    var jase = wholeBoardRow[g11][y1]
    for (let fv = 0; fv < wholeBoardRow[g11][y1].length; fv++) {
        if (!(tst.includes(jase[fv]))){
            wholeBoardRow[g11][y1].splice(fv, 1)
            fv--
        }
    }   
}
}  //console.log(wholeBoardRow)
   

  for (let n1 = 0 ; n1 < 6; n1++) {
      let trackerarr = [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0]]
      for (let n2 = 0; n2 < 6; n2++) {
          //if (wholeBoardRow[n1][n2].length > 1) {
               wholeBoardRow[n1][n2].map((a, in1) => {
                   //console.log(trackerarr)
                   trackerarr[a-1][0]++
                   trackerarr[a-1][1] = n2
               })
          //}
      }

      trackerarr.map((b, in2) => {
        
          if (b[0] === 1) {
  //console.log('ho')
              placeSkyscraper(b[1], n1, in2+1)
          }
      })
  }
for (let n5 = 0; n5 < 6; n5++) {
    for (let ku = 0; ku < 6; ku++) {
        if (wholeBoardRow[n5][ku].length === 1) {
             placeSkyscraper(ku, n5, wholeBoardRow[n5][ku][0])
        }
    }
}
  }
 console.log(wholeBoardRow)
 //console.log(getCol(0), getCol(1), getCol(2), getCol(3), getCol(4), getCol(5))
 console.log(possiblerowList)
 console.log(possibleColList)

//make deep copy, place first row, elim those from next ones below
//generate all possible next row, place roww
  for (let q = 0; q < possiblerowA.length; q++) {
     
      for (let q1 = 0; q1 < possiblerowB.length; q1++) {
         
         var flag1 = false;
         possiblerowB[q1].map((a, ind) => {
             if (a === possiblerowA[q][ind]) {
                 flag1 = true;
             }
         })
         if (flag1===true) {
             continue
         }
         for (let q2 = 0; q2 < possiblerowC.length; q2++) {
         var flag2 = false;
         possiblerowC[q2].map((a, ind) => {
             if (a === possiblerowA[q][ind] || a === possiblerowB[q1][ind]) {
                 flag2 = true;
             }
         })
         if (flag2===true) {
             continue
         }
           for (let q3 = 0; q3 < possiblerowD.length; q3++) {
         var flag3 = false;
         possiblerowD[q3].map((a, ind) => {
             if (a === possiblerowA[q][ind] || a === possiblerowB[q1][ind] || a === possiblerowC[q2][ind]) {
                 flag3 = true;
             }
         })
         if (flag3===true) {
             continue
         }

         for (let q4 = 0; q4 < possiblerowE.length; q4++) {
         var flag4 = false;
         possiblerowE[q4].map((a, ind) => {
             if (a === possiblerowA[q][ind] || a === possiblerowB[q1][ind] || a === possiblerowC[q2][ind] || a === possiblerowD[q3]) {
                 flag4 = true;
             }
         })
         if (flag4===true) {
             continue
         }
         
            for (let q5 = 0; q5 < possiblerowF.length; q5++) {
         var flag5 = false;
         possiblerowF[q5].map((a, ind) => {
             if (a === possiblerowA[q][ind] || a === possiblerowB[q1][ind] || a === possiblerowC[q2][ind] || a === possiblerowD[q3] || a === possiblerowE[q4]) {
                 flag5 = true;
             }
         })
         if (flag5===true) {
             continue
         }
         
         console.log(q, q1, q2, q3, q4, q5)
         return [possiblerowA[q], possiblerowB[q1], possiblerowC[q2], possiblerowD[q3], possiblerowE[q4], possiblerowF[q5]]
      }
      }}
      }}
  }
}