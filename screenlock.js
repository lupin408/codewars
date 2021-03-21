function countPatternsFrom(firstPoint, length) {
    if (length <= 1) {
        return length
    }
    if (length > 9) {
        return 0;
    }
 
var A = [];
var B = [A];
var C = [B];
var D = [A, B, C];
var E = [A, B, C, D];
var F = [A, B, C, E];
var G = [D, B, E, F];
var H = [A, C, D, E, F, G];
var I = [B, D, E, F, H];
A.name = 'A';
B.name = 'B';
C.name = 'C';
D.name = 'D';
E.name = 'E';
F.name = 'F';
G.name = 'G';
H.name = 'H';
I.name = 'I';
A.push(B, F, E, D, H);
B.push(C, F, I, E, G, D)
C.push(D, E, F, H)
D.push(E, G, H, I);
E.push(F, G, H, I);
F.push(G, H, I);
G.push(H);
H.push(I);
//var overallarr = [A, B, C, D, E, F, G, H, I];
//console.log(overallarr)
E.press= function() {
G.push(C);
C.push(G);
I.push(A);
A.push(I);
B.push(H);
H.push(B);
D.push(F);
F.push(D);
E.map(a => {
    if (a.indexOf(E) > -1) {
        a.splice(a.indexOf(E), 1)
    }
})

}
E.unpress = function () {
if (G.indexOf(C) !== -1){
    G.splice(G.indexOf(C), 1);
}
if (C.indexOf(G) !== -1){
    C.splice(C.indexOf(G), 1);
}
if (A.indexOf(I) !== -1) {
    A.splice(A.indexOf(I), 1)
}
if (I.indexOf(A) !== -1) {
    I.splice(I.indexOf(A), 1)
}
if (B.indexOf(H) !== -1) {
    B.splice(B.indexOf(H), 1)
}
if (H.indexOf(B) !== -1) {
    H.splice(H.indexOf(B), 1)
}
if (D.indexOf(F) !== -1) {
    D.splice(D.indexOf(F), 1)
}
if (F.indexOf(D) !== -1) {
    F.splice(F.indexOf(D), 1)
}



E.map(b => {
    
       if (b.indexOf(E) === -1) {
        b.push(E)
    }
    
})
}
B.press = function() {
A.push(C);
C.push(A);

B.map(b => {
    if (b.indexOf(B) >= 0) {
        b.splice(b.indexOf(B), 1)
    }
})
}
B.unpress = function() {
A.splice(A.indexOf(C), 1);
C.splice(C.indexOf(A), 1) 
B.map(b => {
  if (b.indexOf(B) === -1) {
        b.push(B)
    }
}) 
}

A.press = function() {
    A.map(b => {
        if (b.indexOf(A) >= 0) {
            b.splice(b.indexOf(A), 1)
        }
    })
}
A.unpress = function() {
 A.map(b => {
        if (b.indexOf(A) === -1) {
        b.push(A)
    }
    })
}
C.press = function() {
    C.map(b => {
        if (b.indexOf(C) >= 0) {
            b.splice(b.indexOf(C), 1)
        }
    })
}
C.unpress = function() {
 C.map(b => {
        if (b.indexOf(C) === -1) {
        b.push(C)
    }
    })
}
D.press = function() {
A.push(G);
G.push(A);

D.map(b => {
    //console.log(b)
    if (b.indexOf(D) >= 0) {
        b.splice(b.indexOf(D), 1)
       
    }
})
}
D.unpress = function() {
A.splice(A.indexOf(G), 1);
G.splice(G.indexOf(A), 1) 
D.map(b => {
  if (b.indexOf(D) === -1) {
        b.push(D)
    }
}) 
}
F.press = function() {
C.push(I);
I.push(C);

F.map(b => {
    if (b.indexOf(F) >= 0) {
        b.splice(b.indexOf(F), 1)
    }
})
}
F.unpress = function() {
C.splice(C.indexOf(I), 1);
I.splice(I.indexOf(C), 1) 
F.map(b => {
  if (b.indexOf(F) === -1) {
        b.push(F)
    }
}) 
}
G.press = function() {
    G.map(b => {
        if (b.indexOf(G) >= 0) {
            b.splice(b.indexOf(G), 1)
        }
    })
}
G.unpress = function() {
 G.map(b => {
       if (b.indexOf(G) === -1) {
        b.push(G)
    }
    })
}
H.press = function() {
G.push(I);
I.push(G);

H.map(b => {
    if (b.indexOf(H) >= 0) {
        b.splice(b.indexOf(H), 1)
    }
})
}
H.unpress = function() {
G.splice(G.indexOf(I), 1);
I.splice(I.indexOf(G), 1) 
H.map(b => {
    if (b.indexOf(H) === -1) {
        b.push(H)
    }
   
}) 
}
I.press = function() {
    I.map(b => {
        if (b.indexOf(I) >= 0) {
            b.splice(b.indexOf(I), 1)
        }
    })
}
I.unpress = function() {
 I.map(b => {
       if (b.indexOf(I) === -1) {
        b.push(I)
    }
    })
}

var checker = 0;


var pressed1 = new Set();
function progressthru(node, iter) {

    if (iter === length-1) {
        node.map(v => {
            if (pressed1.has(v.name) === false) {
                checker++
            }
        })
    } else {
        node1 = [...node]
        node1.map(a => {
            if (pressed1.has(a.name) === false){
              pressed1.add(a.name)
          
            //only proceed if node is not on pressed list
           
               
            a.press()
          
          

            progressthru(a, iter+1)
            a.unpress()
            pressed1.delete(a.name)
            }

        })
    }
}
var firstNode;
switch(firstPoint) {
    case 'A':
    firstNode = A;
    break;
    case 'B':
    firstNode = B;
    break;
    case 'C':
    firstNode = C;
    break;
    case 'D':
    firstNode = D;
    break;
    case 'E':
    firstNode = E;
    break;
    case 'F':
    firstNode = F;
    break;
    case 'G':
    firstNode = G;
    break;
    case 'H':
    firstNode = H;
    break;
    case 'I':
    firstNode = I;
    break;
    default:
    return 'Not valid starting point'
}
//console.log(firstNode, 'b4')
firstNode.press();
pressed1.add(firstNode.name)
//console.log(firstNode, 'aft')
progressthru(firstNode, 1)
return checker
}
countPatternsFrom('E', 8)