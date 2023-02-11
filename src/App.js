import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';
import Title from './components/Title';


/*
  • JSX, Javascript için bir syntax uzantısıdır.
  • JSX, XSS saldırılarını önler, inputtan direkt olarak veri almak güvenlidir.
  • Boş olan bir etiketi (yani child elementi olmayan bir etiketi) /> ile hemen kapatabilir.
  • JSX'e attribute eklemek için string ifadelerde tırnak işareti, diğer tip ve javascript fonksiyonlarında süslü paranter kullanılır. (const element = <img src={user.avatarUrl}></img>;)
  • JSX JavaScript’e HTML’den daha yakın olduğundan ReactDOM, HTML nitelik adları yerine camelCase adlandırma kuralını kullanır. (class => className etc.)
  • JSX ifadeleri Babel (Javascript compiler -> EcmaScript 6 (JavaScript’in en son büyük sürümü ES6'dır) kodlarını EcmaScript 5 kodlarına dönüştürür) 
  tarafından derlenerek saf Javascript'in anlayacağı objeler haline dönüşür. Örneğin; arrow function yazımını normal function yazımına çevirmek gibi 
  • Babel, modern olarak yazılmış JavaScript kodumuzu, bir Abstract Syntax Tree (AST) ile ayrıştıran ve tarayıcı tarafından yorumlanabilecek bir versiyonuna yeniden çeviren bir plugin sistemi üzerine kurulmuştur.
  • React bir MVC modeli değildir, yalnızca View kısmını temsil eder.
*/

function App() {
  const headerInfo = {
    name : "Hatice",
    surname : "Duru",
  };
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      <Header data={headerInfo}/>
      <Title/>
      <Counter/>
      {/*
      Counter componenti içerisinde bulunan setIncrement fonksiyonun kullanıldığu useEffect yorum satırı ile beraber açılarak mount ve unmount olayları incelenebilir.
      {isVisible && <Counter/>} //Koşullu yazım
      <button onClick={() => setIsVisible((prev) => !prev)}>Visible</button>
      */}
    </div>
  );
}

export default App;
