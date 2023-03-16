// ##################################################

// A va B Butun sonlar berilgan A uzunlikdagi kesmaga maksimal darajada b ustunni joylashtiring A kesmad qolgan bo'sh joyni chiqaruvchi dastur tuzing

// function AboshJoy(a,b){
//     while(a>=b){
//        a=a-b
//     }
//     console.log(a);
// }

// AboshJoy(25,4)

// ##################################################

// A va B Butun sonlar berilgan A uzunlikdagi kesmaga maksimal darajada nechcha marta joylashtirish mumkin ekanligininaniqlovchin dastur tuzing

// function aIchidab(a,b){
//     let n=0
//     while(a>=b)
//     {
//         a = a-b
//         n++
//     }
//     console.log(n);
// }

// aIchidab(28,4)

// ####################################################
// n son berilgan agar son 3 ning darajasi bo'lsa 3 ning  darajasi deb chiqaradigan aks xolda darajasi emas deb chiqarsin

// function isdaraja3(n) {
//  let k = 1;
//  while(k<n){
//     k *=3
//  }
//  if(k==n){
//     console.log("3 ning darajasi");
//  }
//  else{
//     console.log("3 ning darajasi emas");
//  }

// }

// isdaraja3(27);

// // 2 ning qandaydir darajasini bildiruvchi n butun son berilgan  2"k=n n=?
// function darajanitop2(n) {
//     let  k = 1
//     let s=0
//     while(k!=n){
//         k=k*2
//         s++
//     }
//     console.log(s);
// }

// darajanitop2(32)

// ##########################################

// n natural son berilgan  quydagi ifodani hioblovchi dastur tuzing
// n!! = n*(n-2)*(n-4)...

// function hisoblaN(n) {
//   let k = 0;
//   let kopaytma = 1;
//   let m = n;

//   if(n%2==0){
//       while (n-k!==2) {
//         kopaytma = kopaytma*(n-k)
//         k = k+2
//       }
//       console.log(kopaytma);
//   }else{
//     while (n-k!==1) {
//         kopaytma = kopaytma*(n-k)
//         k = k+2
//       }
//       console.log(kopaytma);
//   }
// }

// hisoblaN(10);

// n natural son berilgan ,kvadrati n dan katta bo'ladigan eng kichik butun k sonni aniqlovchi programma tuzing, k'2>n

// function hisobla(n) {
//   let k = 1;
// //   while (n >= k ** 2) {
// //     k++;
// //   }
// //   console.log(k);

// do{
//  k++
// }
// while(n>=k**2)
// console.log(k);
// }

// hisobla(80)

