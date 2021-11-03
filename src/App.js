import CardAnimated from './components/card-animated';
import './App.css';

function App() {
  const textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,..."

  const action = () =>{
    console.log("action to botton")
  }
  return (
    <div className="App">
        <CardAnimated title="something title" content={textContent} textButton="LEARN MORE" buttonAction={action}/>
    </div>
  );
}

export default App;
