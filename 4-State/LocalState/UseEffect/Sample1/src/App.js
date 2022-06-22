import Comp1 from "./components/Comp1";

function App() {
  
  return (
    <>
       <Comp1/> 
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