//############################################################
// k va n butun son berilgan  k sonnini n marta chiqaruvchi dastur tuzing?

// function takrorla(k,n){
//     for(let i=0;i<n;i++){
//         console.log(k,i);
//     }
// }

// takrorla(5,4)

//############################################################
//  a va b butun son berilgan a va b soni orasidagi barcha butun sonlarni chiqaruvchi dastur tuzing (a va b ham kiradi)a<b

// function aBetweenb(a, b) {
//   for (let i = a; i <= b; i++) {
//     console.log(i);
//   }
// }

// aBetweenb(4,9)

//############################################################
//  a va b butun son berilgan a va b soni orasidagi barcha butun sonlarni kamayish tartibida chiqaruvchi dastur tuzing (a va b ham kiradi)a<b (urning sonini ham chiqarsin)

// function bkamayisha(a, b) {
//   let n = 0;
//   for (let i = b; i >= a; i--) {
//     console.log(i);
//     n++;
//   }
//   console.log(n);
// }

// bkamayisha(4, 9);

// function bkamayisha(a,b){
//     let n =0
//     for(let i = a; a<=b; i++){ console.log(b--);
//         n++
//     }
//     console.log(`${n} ta raqam bor`);
// }
// bkamayisha(4,9)

//#################################################################

// bir kilogram konfet narxi berilgan 0.1 0.2 0.3 0.4 . . . . .1kg narxni chiqaruvchi dastur tuzing

// function narx(narxi){
//     for(let i = 0.1;i<=1;i=i+0.1){
//         console.log(narxi*i);
//     }
// }

// narx(4)
// 2-usul
// function narx(narxi){
//     for(let i=1;i<=10;i++){
//         console.log(narxi*(i/10));
//     }
// }
// narx(5)

// 1.2 1.3 1.4 1.5 1.6 .... uchun ham

// function narx(narxi){
//     for(let i=1; i<=10;i++){
//         console.log(narxi*(1+i/10));
//     }
// }
// narx(5)

//############################################################
//  a va b butun son berilgan adan bgacham bo'lgan barcha butun sonlar yigindisini chiqaruvchi dastur tuzing (a<b)

// function SUMabetweenb(a, b) {
//   let summ = 0;
//   for (let i = a+1; i < b; i++) {
//     summ+=i
//   }
//   console.log(summ);
// }
// SUMabetweenb(1,10)

//############################################################

// S=1/2+1/3+1/4+1/5++++++1/n

// function SUMM(n){
//   let summ = 0;
//   for(let i = 1; i<=n; i++){
//    summ = summ+1/i
//   }

//   return summ
// }

// console.log(SUMM(3));

//###############################################################

// n butun son berilgan quydagi yigindini hisoblovchi dastur tuzing?
// function yigindi(n){
//    let summ=0
//   for(let i =0; i<n;i++){
//     summ = summ +(n+i)**2
//   }
//   return summ
// }

// S = 1.1*1.2*1.3*..... n ta ko'paytuvchi

// function kopaytir(n){
//   let summ = 1
//   let kopaytma=1
//   for(let i=1;i<=n;i++){
//   summ = summ+0.1
//   kopaytma = summ*kopaytma

//   }
//   console.log(kopaytma);
// }
// kopaytir(3)

// s = 1.1-1.2+1.3-1.4+1.5+...+...
// function hisobla(n) {
//   let summ = 1;
//   let yigindi=0
//   for (let i = 0; i < n; i++) {
//     summ =(summ+ 0.1);
//     yigindi=yigindi+((-1)**i)*summ
//   }
//   console.log(yigindi);
// }

// hisobla(4)

// ##############################################################

// berilgan n sonning kvadratini hissoblovchi dastur tuzing

// n"2 = 1+3+5+(2n-1)

// function kvadrati(n) {
//   let s=0
//   for (let i = 1; i <= n; i++) {
//     s=s+(2*i-1)
//     console.log(s);
//   }
// }

// kvadrati(5)

// a butun sonning va n- darjasini chiqaruvchi dastur tuzing

// function daraja(a,n){
//   let darajasi = 1
//   for(let i=1;i<=n;i++){
//      darajasi=a*darajasi
//   }
//   console.log(darajasi);
// }

// daraja(5,4)

// 1+a+a**2 +a**3

// function barchdarajaA(a,n){
//   let sum = 0
//   for(let i = 0;i<+n;i++){
//     sum = sum+(a**i)
//   }
// }
// barchdarajaA(2,10)

// n faktarialni hisoblaovchi dastur tuzing
// n! = 1*2*3*4*...*n

// #################################################################

// function fact(n){
//   let fact=1
//   for(let i=1;i<=n;i++){
//     fact = fact * i
//   }
//   console.log(fact);
// }
// fact(5)

// #################################################################

// s = 1!+2!+3!+4!+...+n!

// function factSumm(n) {
//   let fact = 1;
//   let summ = 0;
//   for (let i = 1; i <= n; i++) {
//     fact = fact * i;
//     summ = summ + fact;
//   }
//   console.log(summ);
// }
// factSumm(5);

// function hisobla(n) {
//   let summ = 1;
//   let fact = 1;
//   for (let i = 1; i <= n; i++) {
//     fact = fact * i;
//     summ = summ + 1 / fact;
//   }
//   console.log(summ);
// }

// hisobla(20000)

// n va k  sonlar berilgan quydaguni hisoblovchi dastur tuzing
// 1"k+2"k+3"k+4"k...+...n"k hisoblang

// function hisobla(k, n) {
//   for (let i = 1; i <= n; i++) {
//     let daraja = 1;
//     for (let j = 1; j <= k; j++) {
//       daraja = daraja * i;
//     }
//     console.log(daraja);
//   }
// }

// hisobla(3, 5);

// #############################################################
// n butun son berilgan quydaguni hisoblovchi dastur tuzing
// 1"1+2"2+3"3+4"4...+...n"n hisoblang

// function hisobla(n) {
//   let summ = 0;
//   for (let i = 1; i <= n; i++) {
//     let daraja = 1;
//     for (let j = 1; j <= i; j++) {
//       daraja = daraja * i;
//     }
//     summ = summ + daraja;
//   }
// }

// hisobla(5);

// #############################################################
// n butun son berilgan quydaguni hisoblovchi dastur tuzing
// 1"n+2"n-1+3"n-2+4"n-3...+...n"1 hisoblang

// function hisobla(n) {
//   let k = n;
//   for (let i = 1; i <= n; i++) {
//     let daraja = 1;
    
//     for (let j = 1; j <= k; j++) {
//       daraja = daraja * i;
//     } 
//     k--
//     console.log(daraja);
//   }
// }

// hisobla(5); 
// #############################################################
// a va b Butun sonlar orasidagi barcha butunnsonlari chiqaruvchi dastur tuzing,3 soni 3 marta chiqadigan Bo'lsin
// function aBetweenb(a,b){
//   for(let i=a+1; i<b;i++){
//     for(let j = 1; j<=i;j++){
//       console.log(i);
//     }
//   }
// }
// aBetweenb(2,5)
