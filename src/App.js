import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
      <Navbar title="TextUtils"/>
      <div className='container my-3'>
      <TextForm heading="Enter your text to analyze" />
      </div>
    </div>
  );
}

export default App;
