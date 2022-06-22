import Merhaba from "./components/Merhaba";




function merhaba(isim){
  return (<h3>Merhaba {isim}</h3>);
  
}

function App() {

 
  return (
    <>
    
     <Merhaba hello = {merhaba}/> 
    </>
  );
}

export default App;

