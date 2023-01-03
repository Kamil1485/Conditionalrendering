import Person from './Person';
import './App.css';
import Ternary from './Ternary';
import Operations from './Operations';
import SwitchComponent from './SwitchComponent';
import { useState } from 'react';
import Nested from './Nested';
//Conditional Rendering:Koşullu Render işlemi
//1-Verdigimiz koşula göre componenti ekrana bastırabilirsin veya nebilem bir işlemin sonucunu döndürebilirsin,datadan veri alıp onları ekranda gösterebilirsin
//2-Koşula göre yapılması istene ve istenmeyen işlemleri  gerçekleştir
let x=1343
let y=412

{/** && Kullanımı */}

let isim="aTadEMir"
console.log(isim.toLocaleLowerCase())

function App() {

const [value,Setvalue]=useState("")
const[mesaj,Setmesaj]=useState("")

console.log(value)

  function Inputguncelle(e){
    Setvalue(e.target.value)
  }
  
  //BU İKİ METOT  AYNI DEĞERİ TUTUYOR ASLINDA AMA AMAÇ,BUTONA TIKLANDIGINDA  GİT
  function mesajıguncelle(){
Setmesaj(value)//mesajımızı input a girilen değer olarak aktardık
  } 

  //^^ Nested Conditional İcin
  let list=[{id:0,isim:"Henna",Vejeteryanmı:true},  {id:2,isim:"Resmino",Vejeteryanmı:false},{id:3,isim:"Greece",Vejeteryanmı:true}]


  return (
    <div className="App">
<h2>x:{x},y:{y}</h2>
<h4>{
x>y ? `${x} Büyük`: `Kücük sayı ${x}`

}
</h4>


<h3>Ternarnary Operatörü if-else Kısaltma</h3>
<Ternary isim={"Merve"} Vejeteryanmı={true}/><br/>
<Ternary isim={"Ahmet"} Vejeteryanmı={false}/>

    
    <h4>Componenti İf e gore Cagır</h4>
    <Person/>    
    {/*Hersey Person da başlıyor */}
    
    <h3>&& Operatörü Tercih Etme Sıkıntılı Bug var Nan  da Nan verir,0 verince de 0 yazıyor ekrana olmaz  </h3>
    Mantık: eğer true dönerse  şu işlemi , false dönerse şu işlemi yap demek

  <Operations  isim={"Jane"} result={false}/>
    

    <h3>SwitchCase Kullanımı</h3>
    <h4>Component Adına Göre Ekrana bas</h4>
    <input placeholder='Component Cagır' onChange={(e)=>Inputguncelle(e)}></input>
 <button  onClick={mesajıguncelle}>Getir</button>
    <SwitchComponent componentadı={mesaj.toLocaleLowerCase()} />
    
<h2>Nested Conditional Rendering iç içe if else kullan else den sonrasında başka if başlasın mesela</h2>

<Nested list={list}/>



<h2>Formlar</h2>
<Form/>
    </div>
  );
}

export default App;
