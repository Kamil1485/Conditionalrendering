import React from 'react'
import Ternary from './Ternary'
//4-  Vejeteryanmı={meatwanting ? false:true } burada eger kişi et isityorsa vejeteryan değildir false göndermeliyiz dikkat!!
function Recipe({isim,meatwanting}) {
  return (
    <div>
{/** */}
{ 
    meatwanting ?
    <Ternary isim={isim}  Vejeteryanmı={meatwanting ? false:true }   />
    :
    (
        <Ternary isim={isim}  Vejeteryanmı={meatwanting ? false:true }   />
    )
}
      
    </div>
  )
}

export default Recipe