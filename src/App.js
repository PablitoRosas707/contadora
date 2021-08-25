
import { Contador } from './Components/Contador';
import { Switch } from './Components/Condicional';
import Button from '@material-ui/core/Button';

import React from 'react';

function App({valor, corriente}) {
 
  const{ useContador, sumar,Sustract, Reset } = Contador(valor);
  const { encenderApagar, Condicion } = Switch();
  

  return (
    <div >
      
        
        <h1>El coche esta:{Condicion}</h1>
        <h3>Aumentar {useContador}</h3>
         <Button onClick={()=>sumar(2)} variant="contained" color="primary">Sumar 2</Button>
         <hr/>
         <Button onClick={()=>Sustract(1)} variant="contained" color="secondary">Restar</Button>
         <hr/>
         <Button onClick={()=>Reset(valor)} variant="contained" color="secondary">Reiniciar</Button>
         <hr/>
         <Button onClick={()=>encenderApagar(corriente)} variant="contained" color="primary">Encender/Apagar</Button>
         <hr/>
      
    </div>
  );
}

export default App;
