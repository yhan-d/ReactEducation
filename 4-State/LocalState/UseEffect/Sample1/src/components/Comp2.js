import React, { useState, useEffect} from 'react'

export default function Comp2() {
  const [count, setCount] = useState(0);

  useEffect( () => {
    setTimeout(() => {
          setCount(count => ++count)
            },1000);
  
  },[])

  return (
    <>
      <h3>Count value changed {count} times</h3>
    </>
  )
}
//////
/// useEffect sayfa açıldığı anda çalışmaya başlar. functiondan farkı bir buttona fln bağlamak gerekmez.
//  [] koyarsak komut sadece birkez çağırılır