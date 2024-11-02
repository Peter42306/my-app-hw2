import logo from './logo.svg';
import './App.css';
import MyButton, { MyClassComponent } from './components/Task1';
import { MyClassComponent1 } from './components/Task2';
import { MyHWComponentBookInfo, MyHWComponentBookPhoto, MyHWComponentBookReview1, MyHWComponentBookReview2, MyHWComponentTaskDescription, MyHWComponentTaskNumber } from './components/Task3';


function App() {
  return (
    <div className="App">

      <div className='container-column'>
          <MyHWComponentTaskNumber></MyHWComponentTaskNumber>
          <MyHWComponentTaskDescription></MyHWComponentTaskDescription>              
      </div>      

      <div className='container'>
        <div className='block-bookPhoto'>
            <MyHWComponentBookPhoto></MyHWComponentBookPhoto>
        </div>
        <div className='block-bookInfo'>
            <MyHWComponentBookInfo></MyHWComponentBookInfo>
        </div>
        <div className='block-bookReview'>
            <MyHWComponentBookReview1></MyHWComponentBookReview1>
            <MyHWComponentBookReview2></MyHWComponentBookReview2>
        </div>
      </div>      
    </div>
  );
}

export default App;
