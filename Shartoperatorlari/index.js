// 3 ta son ichida nechtasi musbat ekanligini aniqlovchi dastur tuzing

// function countMusbat (a,b,c){

//     let count = 0

//     if(a>0){
//         count++
//     }
//     if(b>0){
//         count++
//     }
//     if(c>0){
//         count++
//     }

//     return count

// }

// ############################################
// 3 ta son ichida nechtasi musbat va nechtasi manfiy ekanligini aniqlovchi dastur tuzing
// function count (a,b,c){

//         let musbat = 0
//         let manfiy = 0

//         if(a>0){
//             musbat++
//         }else{
//             manfiy++
//         }

//         if(b>0){
//             musbat++
//         }else{
//             manfiy++
//         }

//         if(c>0){
//             musbat++
//         }else{
//             manfiy++
//         }

//         return `${manfiy} ta manfiy, ${musbat}ta musbat son mavjud`

//     }

// ##################################################################
// IkktaSon berilgan kattasini aniqlovchi dastur tuzing?

// function FindHeight(a, b) {
//   return a > b ? a : b;
// }

// console.log(FindHeight(1000,78));

// ##################################################################

// Ikkta son berilgan kattasininig tartibini chiqaruvci dastur tizng?

// function FindHeight(a, b) {
//   return a > b ? "1" : "2";
// }

// console.log(FindHeight(1000,78));

// ##################################################################

// Ikkta son berilgan avval  kattassini keyin kichigini  chiqaruvchi dastur tizng?

// function FindHeight(a, b) {
//   return a > b ? `${a}  ${b}` : `${b}  ${a}` ;
// }

// ##################################################################

// A va B o'zgaruvchilarning qiymati o'zoro teng bo'lmasa u;arning yigindisi aks holad nolni chiqaruvchi dastur  tuzing?

// function tengmi(a,b){
//   return a==b ? 0 : a+b;
// }

// console.log(tengmi(45,46));

// ##################################################################

// Uchta son berilgan eng kichigini chiqaruvchi dastur tuzing?

// function kichik(a, b, c) {
//   let x = a;
//   if (x > a) {
//     x = a;
//   }
//   if (x > b) {
//     x = b;
//   }
//   if (x > c) {
//     x = c;
//   }

//   return x
// }

// Uchta son berilgan avval kichigini keyin kattasini chiqaruvchi dastur  tuzing?

// function kattkichik(a, b, c) {
//   let katta = a,
//     kichik = c;
//   if (katta < b) {
//     katta = b;
//   }
//   if (katta < c) {
//     katta = c;
//   }
//   console.log(katta);
//   if (kichik > b) {
//     kichik = b;
//   }
//   if (kichik > a) {
//     kichik = a;
//   }
//   console.log(kichik);
// }

// kattkichik(1000,300,80)

// 

// Uchta son berilgan o'rtanchasini  chiqaruvchi dastur  tuzing?
// function otanchasi(a,b,c){
//    if(a>b && a<c || a>c && a<b){
//     console.log(a);
//    } else if(b>a && b<c || b>c && b<a){
//     console.log(b);
//    }if(c>b && c<a || a>a && c<b){
//     console.log(c);
//    }
   
// }
// otanchasi(-2,0,-5)


// Uchta son berilgan yigindisi eng katta bo'ladigan 2 tasini   chiqaruvchi dastur  tuzing?


// function largeSUM(a,b,c){
//   if(a+b > a+c && a+b > b+c){
//     console.log(a,b);
//   }else if(a+c > a+b && a+c > b+c){
//     console.log(a,c);
//   } 
//   else if(b+c > a+c && b+c > a+c){
//     console.log(b,c);
//   }
  
// }
// largeSUM(20,40,8)

//  4 ta butun son berilgan 3 tasi o'zora teng bittasini tartib ratqamini chiqaruvchi dastur tuzing?

// function fourN(a,b,c,d){
//     if(a==b && b==c){
//         console.log(d);
//     }else
//     if(b==c && c==d){
//         console.log(a);
//     }else
//     if(a==d && d==c){
//         console.log(b);
//     }else
//     if(a==b && b==d){
//         console.log(c);
//     }
// }

// fourN(4,4,3,4)

// Butun son berilgan berilgan sonni "musbat toqson" "musbat manfiy son" "son nolga teng " xkz korinishda chiqaruvchi dastur tuzinh

// function SonniAniqla(a){
//  if(a>0){
//     if(a%2==0){
//         console.log(`${a} musbat juft son`);
//     } else console.log(`${a} musbat toq son`);
//  } else if(a<0){
//     if(a%2==0){
//         console.log(`${a} manfiy juft son`);
//     } else console.log(`${a} manfiy toq son`);
//  } else console.log("son 0 teng");
// }

// SonniAniqla(0)

// Berilgan yilda necha kun borligni aniqlovchi dastur tuzing? kabisa yilida 366 kun bor,kabisa yili deb 4 ga karrali yilllarga aytilda LEkin 100 ga karrali yillar ichida faqat 400 ga karralilari kabisa yili hisoblanadi


// function IsKabesa(yil){
//   if(yil%4==0){
//    if(yil%100 == 0 && yil % 400 ==0){
//       console.log(366);
//    }
//    else console.log(365);
//   }
// }

// IsKabesa(1300)