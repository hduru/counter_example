import React, { useState, useEffect } from 'react'
import '../App.css';


/* 
  • Component içerisinde bir state güncellendiği zaman o component tekrar render edilir.
  • PreviousState => setCount olarak tanımladığımız fonksiyon bir callback döner. Bu callback ile count değişkeninin o an ifade ettiği değere ulaşabiliriz. 
  • Input içerisinden girilen değeri almak için onChange fonksiyonuna event.target.value değerini set etmeliyiz.
  • Component yaşam döngüsününü (lifecycle) basitçe şu şekilde ifade edebiliriz : mount (ekranda ilk gösterilme anı => doğum), change state (güncellenme durumları => yaşam), unmount (ekrandan kaldırılma anı => ölüm)
  • Component içerisinde state değişim anını yakalamak için useEffect hook'u kullanılır. 
  (Hooks nedir? => Hook, React özelliklerini “bağlamanıza” izin veren özel bir fonksiyondur. Örneğin useState , React state'ini fonksiyon bileşenlerine eklemenize izin veren bir Hook'tur.)
  • Bir component içerisinde birden fazla useEffect yazılabilir.
  • useEffect iki tane parametre alır. Bunlardan biri tetiklendiği an yapmak istediğiniz işlemi yazacağınız fonksiyondur. İkincisi ise array tipinde bir değişkendir.
  İkinci parametre boş array olarak tanımlandığında componentin mount aşamasında fonksiyonu tetikler. Bu şöyle bir işimize yarayabilir örneğin web sayfası ilk açıldığında
  sunucuya istek atarak bir veri çekilecekse, web socket bağlantısı yapılacak veya bir asenkron işlem varsa kullanabilir. Array'in içine component içerisindeki statelerden
  biri yazılırsa (aşağıdaki örnekte; [count] gibi) fonksiyonumuz yalnızca bu state değiştiriğinde tetiklenir.
  • Componentin ekrandan kaldırma durumunda ise useEffect fonksiyonu içinde return dönerek bir fonksiyon çalıştırabilir. Asenkron işlemlerin durulması, web socketin kapatılması,
  event listenerın durdurulması gibi işlemler bu aşamada yapılmalıdır.
*/

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
       setCount(count + 1);
       //setCount((prev) => prev + 1); //PreviousState Kullanımı
    }

    const decrement = () => setCount((prev) => prev - 1);

    const reset = () => setCount(0);

   /*
    useEffect(() => {
        let interval = setInterval(() => {
             console.log("interval");
             setCount((prev) => prev + 1); //Buradaki kullanımı ikinci parametremiz boşken setCount(count + 1); şeklinde yazacak olursak sadece mount aşamasında çalışacağı için hep 1 set eder. Bu yüzden önceki değeri kullanarak işlem yaptık.
        }, 1000);   
        
        return () => clearInterval(interval); //İçeride başlattığımız sayacı component unmount olduğunda durdurma işlemini useEffect fonksiyonu içinde return dönerek yapıyoruz.
    }, []) //Burada count değişkeninin state'ini dinlersek, state her değiştiğinde bu fonksiyon tetiklenir ve setInterval baştan başlar.
    */  

    useEffect(() => {
      console.log("Component mount edildi!");    
    }, [])

    useEffect(() => {
        console.log("Component içinde count state değişti!");    
    }, [count])


    return (
        <div>
          <h1>{count}</h1>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
    )
}
