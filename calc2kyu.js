var calc = function(expression) {
    // evaluate `expression` and retu
    console.log(expression)
    //expression = expression.replace('/\-\(/g', '-0(')
    expression = expression.split('')
  
    //console.log(expression.join(''))
  for (let i = 0; i < expression.length; i++) {
      if ((!((expression[i]) >= 0)) || expression[i] === '(' || (expression[i] >= 0 && !(expression[i+1] >=0))) {
       //console.log(expression[i])
       if (expression[i] === '-' && (expression[i+1] >= 0 || expression[i+1] === '(')) {
  
       }else {
         expression[i]+='  '
       }
          
          
          
      }
  }
  //console.log(expression)
  
  //expression = expression.join('').split(' ')
  
  /* for (let j = 0; j < expression.length; j++) {
    if (expression[j] === '') {
      expression.splice(j, 1)
      j--
    }
    /*
    if (expression[j] === '-' && expression[j+1] === '(') {
      expression.splice(j, 0, '0')
      j++
    }
    
  } */
  expression = expression.join('').split(' ')
  for (let g = 0; g < expression.length; g++) {
    if (expression[g] === '-' && expression[g+1] === '(') {
      expression[g+1] = '-('
      expression.splice(g, 1)
      g--
    }
  }
  
  for (let j = 0; j < expression.length; j++) {
    if (expression[j] === '') {
      expression.splice(j, 1)
      j--
    }
   
  }
  console.log(expression.slice(0, expression.length))
  for (let v = 0; v < expression.length; v++) {
    if (expression[v] < 0 || expression[v] === '-(') {
      if (expression[v-1] !== '*' && expression[v-1] !== '-' && expression[v-1] !== '+' && expression[v-1] !== '/' && expression[v-1] !== '(' && expression[v-1] !== '-(' && v  0) {
        expression.splice(v, 1, '-', expression[v].slice(1, expression[v].length))
      }
    }
  }
  
  
  
  for (let f = 0; f < expression.length; f++) {
    if (Number(expression[f]) >= 0 || Number(expression[f]) < 0 ) {
      if (expression[f+1] === '.' && expression[f+2] >=0){
        expression.splice(f, 3, Number(expression[f] + '.'+ expression[f+2]))
  
      }
    }
  }
  console.log(expression.slice(0, expression.length))
  
  var solveit = function(b) {
    
    if (b.length === 1) {
     
      return Number(b[0])
    }
   for (let h = 0; h < b.length; h++) {
   
    if (b[h] === '*') {
    b.splice(h-1, 3, (Number(b[h-1])*Number(b[h+1]))+'')
    h--
    }
    if (b[h] === '/') {
      b.splice(h-1, 3, (Number(b[h-1]) / Number(b[h+1])) +'')
      h--
    }
  } 
  for (let h = 0; h < b.length; h++) {
    
    if (b[h] === '+') {
    b.splice(h-1, 3, (Number(b[h-1])+Number(b[h+1]))+'')
    h--
    }
    if (b[h] === '-') {
      b.splice(h-1, 3, (Number(b[h-1]) - Number(b[h+1])) +'')
      h--
    }
  }
  
  return b[0]
  }
  var calcparen1;
  var parencalc = function(arr, k) {
  console.log(arr)
  
    for (let p = k+1; p < arr.length; p++) {
      if (arr[p] === '(') {
       
          calcparen1 = parencalc(arr, p)
      arr.splice(p, calcparen1[0], calcparen1[1] )
      
      }  if (arr[p] === '-(') {
   
       
          calcparen1 = parencalc(arr, p)
       
      arr.splice(p, calcparen1[0] , calcparen1[1] * -1 )
  
       
     
     
      }
      if (arr[p] === ')' ) {
        
        return [(p-k)+1, solveit(arr.slice(k+1, p))]
      }
  
  
    }
    return [(arr.length-k), solveit(arr.slice(k+1, arr.length-1))]
  }
  
  for (let k = 0; k < expression.length; k++) {
    if (expression[k] === '(') {
      var calcparen = parencalc(expression, k)
      expression.splice(k, calcparen[0], calcparen[1] )
    }
     if (expression[k] === '-(') {
    
         var calcparen = parencalc(expression, k)
        
      expression.splice(k, calcparen[0], calcparen[1] * -1 )
    
      if (expression[k+1] === ')') {
        expression.splice(k+1, 1)
    
      }
      }
  }
  return Number(solveit(expression))
  };
  