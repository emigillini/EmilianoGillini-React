
import './App.css';
import saludar from './prueba';
import { Tutores } from './componentes/tutoresUl';
import Noticias from './componentes/Noticias';
import Tutor from './componentes/tutor';


function App() {

  return (
    
  <div>

<Noticias/>
  <Tutores/>
<Tutor nombre="dante" edad={28}/>
  </div>
  );
  
}

export default App;
//{Tutores()} puedo llamar asi a elemento pero uso   <Tutores/>