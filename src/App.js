import logo from './logo.svg';
import './App.css';
import { 
  MyHWComponentGroupAlbum1, 
  MyHWComponentGroupAlbum2, 
  MyHWComponentGroupAlbum3, 
  MyHWComponentGroupAlbum4, 
  MyHWComponentGroupMember1, 
  MyHWComponentGroupMember2, 
  MyHWComponentGroupMember3, 
  MyHWComponentGroupMember4, 
  MyHWComponentGroupTitleDescription, 
  MyHWComponentGroupTitleName, 
  MyHWComponentGroupTitlePhoto, 
  MyHWComponentTaskDescription, 
  MyHWComponentTaskNumber } from './components/Task4';
// import MyButton, { MyClassComponent } from './components/Task1';
// import { MyClassComponent1 } from './components/Task2';
// import { MyHWComponentBookInfo, MyHWComponentBookPhoto, MyHWComponentBookReview1, MyHWComponentBookReview2, MyHWComponentTaskDescription, MyHWComponentTaskNumber } from './components/Task3';


function App() {
  
  return (
    <div className="App">
      {/* Task 2 */}
      {/* Home Work Task 2 */}
      <div className='container-task container-task-styles'>
      <MyHWComponentTaskNumber></MyHWComponentTaskNumber>
      <MyHWComponentTaskDescription></MyHWComponentTaskDescription>      
      </div>
      
      {/* Group Photo & Description */}
      <div className='container-group'>
        <div className='block-group-photo'>
          <MyHWComponentGroupTitlePhoto></MyHWComponentGroupTitlePhoto>
        </div>
        <div className='block-group-description'>
          <div className='block-group-name-style'>
          <MyHWComponentGroupTitleName></MyHWComponentGroupTitleName>
          </div>
          <div className='block-group-description-style'>
          <MyHWComponentGroupTitleDescription></MyHWComponentGroupTitleDescription>
          </div>                    
        </div>
        
      </div>
      <hr></hr>

      {/* Group Member */}
      <div>
        <MyHWComponentGroupMember1></MyHWComponentGroupMember1>
        <hr></hr>
        <MyHWComponentGroupMember2></MyHWComponentGroupMember2>
        <hr></hr>
        <MyHWComponentGroupMember3></MyHWComponentGroupMember3>
        <hr></hr>
        <MyHWComponentGroupMember4></MyHWComponentGroupMember4>
        <hr></hr>
      </div>

      {/* Group Albums */}
      <div className='container-albums-all'>
        <MyHWComponentGroupAlbum1></MyHWComponentGroupAlbum1>
        <MyHWComponentGroupAlbum2></MyHWComponentGroupAlbum2>
        <MyHWComponentGroupAlbum3></MyHWComponentGroupAlbum3>
        <MyHWComponentGroupAlbum4></MyHWComponentGroupAlbum4>
      </div>

      
      
      

      {/* Task 1 */}
      {/* <div className='container-column'>
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
      </div> */}
    </div>
  );
}

export default App;
