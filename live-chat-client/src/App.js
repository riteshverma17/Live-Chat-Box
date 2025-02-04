import './App.css';
import MainContainer from './Components/MainContainer';
import LoginPage from './Components/LoginPage';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome';
import ChatArea from './Components/ChatArea';
import CreateGroups from './Components/CreateGroups';
import Groups from './Components/Groups';
import Users from './Components/Users';
import SignUpPage from './Components/SignUpPage';


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="signUpPage" element={<SignUpPage/>} />
        <Route path='app' element={<MainContainer/>}>
          <Route path='welcome' element={<Welcome />} />
          <Route path='chat' element={<ChatArea />} />
          <Route path='create-groups' element={<CreateGroups />} />
          <Route path='users' element = {<Users />} />
          <Route path='groups' element = {<Groups />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
