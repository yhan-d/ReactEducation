import {useState} from "react";
function App() {
  const [color, setColor] = useState("Kırmızı") // color değişkendir.setColor özel bir fonsiyondur.(color değikenini değiştirme özelliği var)
  const [count, setCount] = useState(0) // count değişkendir(integerdir).setCount özel bir fonsiyondur.(count değişenini değiştirme özelliği var)
// hook state ile birlikte kullanılır.
// normal değişken değilde neden state kullanıyoruz? Çünkü sadece değiştirmek istediğimiz kısım için kullanıyoruz.

  function ChangeColor(renk){
    setColor(renk)
  }
  function Add(sayi){
    setCount(++sayi)
  }
  function Remove(sayi){
    setCount(--sayi)
    if (sayi<0)
      setCount(0)
  }
  return (
    <>
     <h3>My favorite color is {color}!</h3>
     <h3>Sepetim {count}!</h3>
    <button
        type="button"
       // onClick={() => setColor("Kırmızı")}
       onClick={() => ChangeColor("Kırmızı")}
      >Varsayılan</button>
      <button
        type="button"
      //  onClick={() => setColor("Mavi")}
      onClick={() => ChangeColor("Mavi")}
      >Mavi</button>
      <button
        type="button"
      //  onClick={() => setColor("Yesil")}
      onClick={() => ChangeColor("Yesil")}
      >Yesil</button> 
      <button
        type="button"
      onClick={() => Add(count)}
      >Sepete Ekle</button> 
      <button
        type="button"
      onClick={() => Remove(count)}
      >Sepetten Çıkar</button>     
    </>
  );
}

export default App;

// iki çeşit component var
// 1-)function 2-)class
// function da metotlar yazılıyordu.Sonradan state de eklendi.Daha kullanılır hale geldi.
// functionda ki stateler UseState kullanıyor.Bununla birlikte hook ta kullanılıyor
// class da hem metotlar hem stateler vardı.
// classda ki stateler ComponentdidMount kullanıyor.
// class componenti demode oldu.function componenti daha çok kullanılıyor.