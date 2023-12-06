//components
import FirstComponent from './components/FirstComponent.jsx';
import TemplateExpressions from './components/TemplateExpressions.jsx';
import MyComponent from './components/MyComponent.jsx';
import Events from './components/Events.jsx';
import Challenge from './components/Challenge.jsx';

//css
import './App.css'


function App() {

  return (
    <>
      <div>
        <h1> Meu nome é Biscoito!</h1>
      </div>
      <MyComponent />
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <Challenge />
      
    </>
  )
}

export default App;
