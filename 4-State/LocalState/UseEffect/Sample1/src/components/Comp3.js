import React, { useState, useEffect} from 'react'

export default function Comp3() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  useEffect( () => {
    setCalculation(() => count * 2);
  },[count]);

  return (
    <>
      <h3>Count value: {count}</h3>
      <h3>Calculation value: {calculation}</h3>
      <button onClick={() => setCount((c) => c+1)}> + </button>
    </>
  )
}
//////
/// useEffect sayfa açıldığı anda çalışmaya başlar. functiondan farkı bir buttona fln bağlamak gerekmez.
//  [] koyarsak komut sadece birkez çağırılır
// [count] diyerek count değeri değiştikçe bu işlem yapılsın demiş olduk