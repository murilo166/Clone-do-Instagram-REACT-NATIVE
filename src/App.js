import './App.css';
import logoInsta from './componentes/imagens/Instagram_logo.png';
import SidebarHeader from './componentes/SidebarHeader/SidebarHeader';
import Feed from './componentes/Feed/Feed';
import Stories from './componentes/Stories/Stories';
import Sugestoes from './componentes/Sugestoes/Sugestoes';



function App() {
  return (
    <div className="App">
      <SidebarHeader logo={logoInsta} />

      <div className='geral'>
      <div className='timelne'>
        <Stories />
        <Feed   />
      </div>



      <div className='Sug'>
    <div>
      <Sugestoes/>
    </div>
      </div>
    </div>
    </div>
  )
}

export default App;
