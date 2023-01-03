import React from 'react'
import App from "./App";
import Recipe from "./Recipe";
let müsteriler=[
    {id:0,isim:"Ahmet",meatwanting:"true"},
    {id:1,isim:"Veli",meatwanting:"false"},
    {id:2,isim:"Kamil",meatwanting:"true"},
    {id:3,isim:"Berna",meatwanting:"true"},
]


const result = true && 'Hello World';




function Person() {
  return (
    <div style={{backgroundColor:"#5edd4f",color:"#d110ea"}}>
 <h2>Müşteriler :</h2>


 { // 6-kişilerin özelliklerini  Recipe Componentine props   olarak gönderiyoruz
    müsteriler.map((musteri)=>{
        return <Recipe  key={musteri.id} isim={musteri.isim} meatwanting={musteri.meatwanting} />
    })
 }





     
    </div>
  )
}

export default Person
// 5- datadan cekmek istemezsen deneme olarak props gönderimi!
/*
  <Recipe  isim={"ahmet"} meatwanting={true}/><br/>
       <Recipe isim={"veli"} meatwanting={false}/>
       */