/*operadores de comparacion*/

/*

==        (igualdad)
!=        (diferente)  
>         (mayor)
<         (menor) 
>=        (mayor o igual que)
<=        (menor a igual que)

*/

/*operadores logico*/

// &&      (and)
// ||      (OR)

const a = 10;
const b = 20;
const c= "10";

a == b; // falso    

a === b; //falso

a != b ; // verdadero

a !== c ; //verdadero

a > b; //falso

b < a; //falso

a == b && a === c; //falso
a != b || a === c; //verdadero