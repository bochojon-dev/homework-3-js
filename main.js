// UYGA VAZIFA

// IF PROBLEMS

// // IF1
// let a = +prompt(`butun son kiriting`);
// if (a > 0) {
//   b = a + 1;
//   console.log(`siz kiritgan son musbat: ` + b);
// } else {
//   console.log(`siz kiritgan son manfiy: ` + a);
// }

// // IF2
// let a = +prompt(`butun son kiritng`);
// if (a >= 0) {
//   if (a == 0) {
//     console.log(`"0" sonini kiritndingiz: ` + 10);
//   } else {
//     b = a + 1;
//     console.log(`musbat son kiritdingiz: ` + b);
//   }
// } else {
//   c = a - 2;
//   console.log(`manfiy son kiritdingiz: ` + c);
// }

// // IF3
// let a = +prompt(`3 ta mubat son kiriting (birinchi son) `);
// let b = +prompt(`musbat son kiriting (ikkinchi son)`);
// let c = +prompt(`musbat son kiriting (uchinchi son)`);
// x = Number.isInteger(a);
// y = Number.isInteger(b);
// z = Number.isInteger(c);
// if (x == true) {
//   console.log(`${a} butun son`);
// } else {
//   console.log(`${a} butun son emas`);
// }
// if (y == true) {
//   console.log(`${b} butun son`);
// } else {
//   console.log(`${b} butun son emas`);
// }
// if (z == true) {
//   console.log(`${c} butun son`);
// } else {
//   console.log(`${c} butun son emas`);
// }

// // IF4
// let a = +prompt(`2 ta butun son kiriting (birinchi son)`);
// let b = +prompt(`butun son kiriting (ikkinchi son)`);
// if (a >= b) {
//   if (a == b) {
//     console.log(`kiritilgan sonlar qiymati teng: ` + a);
//   } else {
//     console.log(`kiritlgan sonlarning eng kattasi: ` + a);
//   }
// } else {
//   console.log(`kiritilgan sonlarning eng kattasi: ` + b);
// }

// // IF5
// let a = +prompt(`2 ta butun son kiriting (birinchi son)`);
// let b = +prompt(`butun son kiriting (ikkinchi son)`);
// if (a >= b) {
//   if (a == b) {
//     console.log(`kiritilgan sonlar bir-biriga teng: ` + a);
//   } else {
//     console.log(`kiritilgan ikkinchi son eng kichigi: ` + b);
//   }
// } else {
//   console.log(`kiritilgan birinchi son eng kichigi: ` + a);
// }

// // IF6
// let a = +prompt(`2 ta butun son kiriting (birinchi son)`);
// let b = +prompt(`butun son kiriting (ikkinchi son)`);
// if (a >= b) {
//   if (a == b) {
//     console.log(a + ` = ` + b);
//   } else {
//     console.log(a + ` > ` + b);
//   }
// } else {
//   console.log(b + ` > ` + a);
// }

// // IF7
// let a = +prompt(`A sonini kiriting)`);
// let b = +prompt(`B sonini kiriting`);
// if (a >= b) {
//   if (a == b) {
//     console.log(
//       `A va B tengligi uchun B soniga minus ishorasi qo'yildi: ` +
//         a +
//         ` > ` +
//         `-` +
//         b
//     );
//   } else {
//     console.log(`A soni B dan katta:  ` + a + ` > ` + b);
//   }
// } else {
//   console.log(
//     `B soni A dan kattaligi uchun qiymatlar o'rni almashtirildi: ` +
//       a +
//       ` > ` +
//       b
//   );
// }

// // IF8
// let a = +prompt(`A sonini kiriting (butun son)`);
// let b = +prompt(`B sonini kiriting (butun son)`);
// if (a >= b) {
//   if (a == b) {
//     console.log(`A va B teng ${a} = ${b}: ` + 0);
//   } else {
//     c = a + b;
//     console.log(`A soni B dan katta ${a} > ${b}, ularning yig'indisi: ` + c);
//   }
// } else {
//   c = a + b;
//   console.log(`A soni B dan kichik  ${a} < ${b}, ularning yig'indisi: ` + c);
// }

// // IF9
// let a = +prompt(`A sonini kiriting (butun son)`);
// let b = +prompt(`B sonini kiriting (butun son)`);
// if (a >= b) {
//   if (a == b) {
//     console.log(`A va B teng ${a} = ${b}: ` + 0);
//   } else {
//     console.log(`A soni B dan katta ${a} > ${b}, ularning yig'indisi: ` + a);
//   }
// } else {
//   console.log(`A soni B dan kichik  ${a} < ${b}, ularning yig'indisi: ` + b);
// }

// // IF10
// let a = +prompt(`3 ta son kiriting (birinchi son)`);
// let b = +prompt(`son kiriting (ikkinchi son)`);
// let c = +prompt(`son kiriting (uchinchi son)`);
// console.log(`kiritilgan sonlarning eng kichigi: ` + Math.min(a, b, c));

// // IF11
// let a = +prompt(`3 ta son kiriting (birinchi son)`);
// let b = +prompt(`son kiriting (ikkinchi son)`);
// let c = +prompt(`son kiriting (uchinchi son)`);
// if (a > b) {
//   if (a > c) {
//     if (b > c) {
//       console.log(`kiritilgan sonlarning o'rtachasi ${b}`);
//     } else {
//       console.log(`kiritilgan sonlarning o'rtachasi ${c}`);
//     }
//   } else {
//     console.log(`kiritilgan sonlarning o'rtachasi ${a}`);
//   }
// }
// if (b > a) {
//   if (b > c) {
//     if (a > c) {
//       console.log(`kiritilgan sonlarning o'rtachasi ${a}`);
//     } else {
//       console.log(`kiritilgan sonlarning o'rtachasi ${c}`);
//     }
//   } else {
//     console.log(`kiritilgan sonlarning o'rtachasi ${b}`);
//   }
// }
// //  IF12
// let a = +prompt(`3 ta son kiriting (birinchi son)`);
// let b = +prompt(`son kiriting (ikkinchi son)`);
// let c = +prompt(`son kiriting (uchinchi son)`);
// if (a > b) {
//   if (a > c) {
//     if (b > c) {
//       x = a + b;
//       console.log(`eng katta yig'indi: ${x}`);
//     } else {
//       y = a + c;
//       console.log(`eng katta yig'indi: ${y}`);
//     }
//   } else {
//     z = a + c;
//     console.log(`eng katta yig'indi: ${z}`);
//   }
// }
// if (b > a) {
//   if (b > c) {
//     if (a > c) {
//       m = b + a;
//       console.log(`eng katta yig'indi: ${m}`);
//     } else {
//       n = b + c;
//       console.log(`eng katta yig'indi: ${n}`);
//     }
//   } else {
//     k = c + b;
//     console.log(`kiritilgan sonlarning o'rtachasi ${k}`);
//   }
// }

// -------////////////////

// CASE PROBLEMS

// // CASE1
// let score = +prompt(`bahoyingizni kiriting`);
// let your_score;
// switch (score) {
//   case 1:
//     your_score = `yomon`;
//     break;
//   case 2:
//     your_score = `qoniqarsiz`;
//     break;
//   case 3:
//     your_score = `qoniqaarli`;
//     break;
//   case 4:
//     your_score = `yaxshi`;
//     break;
//   case 5:
//     your_score = `a'lo`;
//     break;
//   default:
//     your_score = `xato`;
// }
// console.log(your_score);

// // CASE2
// let numOfMonth = +prompt(`oy raqamini kiriting`);
// let month;
// switch (numOfMonth) {
//   case 1:
//     month = `1-oy, yanvar "qish"`;
//     break;
//   case 2:
//     month = `2-oy, fevral "qish"`;
//     break;
//   case 3:
//     month = `3-oy, mart "bahor"`;
//     break;
//   case 4:
//     month = `4-oy, aprel "bahor"`;
//     break;
//   case 5:
//     month = `5-oy, may "bahor"`;
//     break;
//   case 6:
//     month = `6-oy, iyun "yoz"`;
//     break;
//   case 7:
//     month = `7-oy, iyul "yoz"`;
//     break;
//   case 8:
//     month = `8-oy, avgust "yoz"`;
//     break;
//   case 9:
//     month = `9-oy, sentabr "kuz"`;
//     break;
//   case 10:
//     month = `10-oy, oktabr "kuz"`;
//     break;
//   case 11:
//     month = `11-oy, noyabr "kuz"`;
//     break;
//   case 12:
//     month = `12-oy, dekabr "qish"`;
//     break;
//   default:
//     month = `xato raqam kiritdingiz`;
// }
// console.log(month);

// // CASE3
// let numOfMonth = +prompt(`oy raqamini kiriting`);
// let month;
// switch (numOfMonth) {
//   case 1:
//     month = `1-oy, yanvarda 31 kun bor`;
//     break;
//   case 2:
//     month = `1-oy, fevralda 28 kun bor`;
//     break;
//   case 3:
//     month = `3-oy, martda 31 kun bor`;
//     break;
//   case 4:
//     month = `4-oy, aprelda 30 kun bor`;
//     break;
//   case 5:
//     month = `5-oy, mayda 31 kun bor`;
//     break;
//   case 6:
//     month = `6-oy, iyunda 30 kun bor`;
//     break;
//   case 7:
//     month = `7-oy, iyulda 31 kun bor`;
//     break;
//   case 8:
//     month = `8-oy, avgustda 31 kun bor`;
//     break;
//   case 9:
//     month = `9-oy, sentabrda 30 kun bor`;
//     break;
//   case 10:
//     month = `10-oy, oktabrda 31 kun bor`;
//     break;
//   case 11:
//     month = `11-oy, noyabrda 30 kun bor`;
//     break;
//   case 12:
//     month = `12-oy, dekabrda 31 kun bor`;
//     break;
//   default:
//     month = `xato raqam kiritdingiz`;
// }
// console.log(month);

// // CASE4
// let birlik = +prompt(
//   `uzuklik birligini tanlang: 1-desimetr, 2-kilometr, 3-metr, 4-millimetr, 5-santimetr`
// );
// let uzunlik = +prompt(`kesma usunligini kiriting`);
// let metr;
// switch (birlik) {
//   case 1:
//     metr = uzunlik / 10;
//     break;
//   case 2:
//     metr = uzunlik * 1000;
//     break;
//   case 3:
//     metr = uzunlik;
//     break;
//   case 4:
//     metr = uzunlik / 1000;
//     break;
//   case 5:
//     metr = uzunlik / 100;
//     break;

//   default:
//     metr = `ro'yxatda mavjud birlik kiritmadingiz`;
//     break;
// }
// console.log(`siz kiritgan kesma uzunligi ${metr} metr`);

// // CASE5
// let birlik = +prompt(
//   `og'irlik birligini tanlang: 1-kilogramm, 2-milligramm, 3-gramm, 4-tonna, 5-sentiner`
// );
// let vazn = +prompt(`og'irlik qiymatigini kiriting`);
// let massa;
// switch (birlik) {
//   case 1:
//     massa = vazn;
//     break;
//   case 2:
//     massa = vazn * Math.pow(10, -6);
//     break;
//   case 3:
//     massa = vazn * Math.pow(10, -3);
//     break;
//   case 4:
//     massa = vazn * 1000;
//     break;
//   case 5:
//     massa = vazn * 100;
//     break;
//   default:
//     metr = `ro'yxatda mavjud birlik kiritmadingiz`;
//     break;
// }
// console.log(`siz kiritgan og'irlik ${massa} kilogramm`);

// // CASE6
// let m = +prompt(`oyni kiriting`);
// let d = +prompt(`kunni kiriting`);
// let now;
// switch (m) {
//   case 1:
//     now = d;
//     break;
//   case 2:
//     now = d + 31;
//     break;
//   case 3:
//     now = d + 59;
//     break;
//   case 4:
//     now = d + 90;
//     break;
//   case 5:
//     now = d + 120;
//     break;
//   case 6:
//     now = d + 152;
//     break;
//   case 7:
//     now = d + 182;
//     break;
//   case 8:
//     now = d + 213;
//     break;
//   case 9:
//     now = d + 244;
//     break;
//   case 10:
//     now = d + 274;
//     break;
//   case 11:
//     now = d + 305;
//     break;
//   case 12:
//     now = d + 335;
//     break;
//   default:
//     now = `mavjud bo'lmagan sanani kiritdingiz`;
//     break;
// }
// console.log(`ushbu sana yilning ${now}-kuniga to'g'ri keladi`);

// // CASE7
// let m = +prompt(`oyni kiriting`);
// let d = +prompt(`kunni kiriting`);
// let b = d - 2 + 3;
// let now;
// switch (m) {
//   case 1:
//     now = `yanvar`;
//     break;
//   case 2:
//     now = `fevral`;
//     break;
//   case 3:
//     now = `mart`;
//     break;
//   case 4:
//     now = `aprel`;
//     break;
//   case 5:
//     now = `may`;
//     break;
//   case 6:
//     now = `iyun`;
//     break;
//   case 7:
//     now = `iyul`;
//     break;
//   case 8:
//     now = `avgust`;
//     break;
//   case 9:
//     now = `sentabr`;
//     break;
//   case 10:
//     now = `oktabr`;
//     break;
//   case 11:
//     now = `noyabr`;
//     break;
//   case 12:
//     now = `dekabr`;
//     break;
//   default:
//     now = `mavjud bo'lmagan sanani kiritdingiz`;
//     break;
// }
// console.log(`keyingi kun ${b}-${now}`);
