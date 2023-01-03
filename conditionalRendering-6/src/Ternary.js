import React from 'react'
//3- Vejeteryansa ismini ve vejeteryan diyor


/*
 if (isVegetarian) {
    return 'tofu';
  } else {
    return 'fish';
  }
*/
//^ Person-Recipe-Ternanary  son ekrana basma kısmı burası artık !! Person Recipei cagırıoyr recipe de ternanry basacak tabi kendi icindekileride basıyor ekstra bunu cagırıyor

function Ternary({isim,Vejeteryanmı}) {
  //alternatif Nested conditionlar icin yeniden tanımlama  if else i
return Vejeteryanmı ? `${isim} Vejeyeryan Et yemez `:`${isim} Vejeteryan degil Et yiyebilir`              

}

export default Ternary