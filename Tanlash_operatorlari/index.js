// ###################################################################

// 1-7 gacha son kirtilganda hafatning qaysi kuni ekanligini ko'ratuvchi dastur tuzing? Misol: 1-Dushanba 2 -seshanba

// function haftaKunlari(Number) {
//   let kunNomi;
//   switch (Number) {
//     case 1:
//       kunNomi = "Dushanba";
//       break;
//     case 2:
//       kunNomi = "Seshanba";
//       break;
//     case 3:
//       kunNomi = "Chorshanba";
//       break;
//     case 4:
//       kunNomi = "Payshanba";
//       break;
//     case 5:
//       kunNomi = "Juma";
//       break;
//     case 6:
//       kunNomi = "Shanba";
//       break;
//     case 7:
//       kunNomi = "Yakshanba";
//       break;
//     default:
//       kunNomi = "Bunday tartibdagi hafta kuni mavjud emas";
//   }

//   return kunNomi;
// }

// console.log(haftaKunlari(8));

// ###################################################################

// Oy tartib raqami berilgan qaysi faslga kirishini aniqlovchi dastur tuzing?

// function Qaysifasl(oyTartibi) {
//   let fasl;
//   switch (oyTartibi) {
//     case 12:
//     case 1:
//     case 2:
//       fasl = "Qish fasli";
//       break;
//     case 12:
//     case 1:
//     case 2:
//       fasl = "Qish fasli";
//       break;
//     case 3:
//     case 4:
//     case 5:
//       fasl = "Baxor fasli";
//       break;
//     case 6:
//     case 7:
//     case 8:
//       fasl = "Yoz fasli";
//       break;
//     case 9:
//     case 10:
//     case 11:
//       fasl = "Kuz fasli";
//       break;
//     default:
//       fasl = "bunday fasl  yuq";
//   }

//   return fasl;

// }

// console.log(Qaysifasl(1));

// ###################################################################

// Kirtilgan 2 ta son ustida matematik ammlarni bajaruvchi dastur tuzing ?
// 1-qo'shish 2 -ayirish 3 ko'paytirish 4- bo'lish

// function Amallar(a, b, amal) {
//   natija = a + b;
//   switch (amal) {
//     case 1:
//       natija = a + b;
//       break;
//     case 2:
//       natija = a - b;
//       break;
//     case 3:
//       natija = a * b;
//       break;
//     case 4:
//       natija = a / b;
//       break;
//     default:
//       natija = "amal yoki raqam noto'gri kititldi";
//   }

//   return natija;
// }

// console.log(Amallar(4, 5, 3));

// ###################################################################

// ikkta butun Son berilgan D(Kun) M(oy) berilgan sanadan keyingi sanni ifodalovchi dastur tuzing (kabisa bo'lmagan yil uchun)

// function nextDay(D,M){

//    switch(M){
//     case 2:
//         if(D==28){
//             D=1
//             M=M+1
//         }
//         else{
//             D=D+1
//             M=M+1
//         }
//         break;
//     default :if(D==30 || D== 31){
//         D = 1;
//         M++;
//     }
//     else{

//         D++;
//     };

//    }

//    return `${D}/${M}`
// }

// console.log(nextDay(28,3));

// 20-40 oraligidagi sonni so'zlarda ifodalovchi dastur tuzing?

// function SayNumber(number) {
//   if (number >= 20 && number <= 40) {
//     let onlik = Math.trunc(number / 10);
//     let birlar = number % 10;
//     let str1;
//     let str2;
//     switch (onlik) {
//       case 2:
//         str1 = "yigirma ";
//         break;
//       case 3:
//         str1 = "o'ttiz";
//         break;
//       case 4:
//         str1 = "qirq";
//         break;
//     }

//     switch (birlar) {
//       case 0:
//         str2 = "";
//         break;
//       case 1:
//         str2 = " bir";
//         break;
//       case 2:
//         str2 = " ikki";
//         break;
//       case 3:
//         str2 = "uch";
//         break;
//       case 4:
//         str2 = "4";
//         break;
//       case 5:
//         str2 = "besh";
//         break;
//       case 6:
//         str2 = "olti";
//         break;
//       case 7:
//         str2 = "yetti";
//         break;
//       case 8:
//         str2 = "sakkiz";
//         break;
//       case 9:
//         str2 = "to'qqizz";
//         break;
//     }

//     return str1 + str2;
//   } else {
//    return "20 va 40 oraligidagi sonni kiriting";
//   }
// }

// console.log(SayNumber(32)); qolgan holatlarda ham shub usuldan foydalaniladi
