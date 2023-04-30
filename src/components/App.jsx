import UserList from "./UserList/userList";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './Home/Home'



export const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/tweets" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
};







// export const App = () => {
//   return (
//     <UserList/>
//   );
// };
