import './App.css';
import MenuLeft from '../menu-left/menu-left';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../header/Header';
import UserList from '../user-list/UserList';
import CarriersList from '../CarriersList/CarriersList';
import CarrierItem from '../CarrierItem/CarrierItem';
import { Routes, Route, Navigate } from "react-router-dom";
// import LoginPage from '../login-page/login-page';
import CourseList from '../course-list/course-list';
import CourseItem from '../course-item/course-item';
import RequestList from '../request-list/request-list';
import RequestItem from '../request-item/request-item';
import { RootStoreProvider, RootStore } from '../../store/rootstore';
import Authorization from '../authorization/authorization'

const App = () => {
  const rootStore = new RootStore()
  const isLoggedIn = false
  return (

    <RootStoreProvider value={rootStore}>
      <div className="app row">
        {/* <LoginPage/> */}
        {!isLoggedIn && 
          <Routes>
            <Route index path="auth" element={<Authorization/>} />
            <Route index path="*" element={<Navigate to="auth"/>} />
          </Routes>
        }
        {isLoggedIn && <>
          <div className="left col-2">
            <MenuLeft/>
          </div>

          <div className="right col-10">
            <Header/>
          </div>     
          
          <Routes>
            <Route index path="users" element={<UserList />} />
            <Route path="carriers" element={<CarriersList />} />
            <Route path="carriers/edit-carrier/:itemIndex" element={<CarrierItem />} />
            <Route path="carriers/new-carrier" element={<CarrierItem />} />
            <Route path="route" element={<CourseList />} /> 
            <Route path="route/new-route" element={<CourseItem />} />
            <Route path="route/edit-route/:itemIndex" element={<CourseItem />} />
            <Route path="request" element={<RequestList />} />
            <Route path="request/new-request" element={<RequestItem/>} />
            <Route path="request/edit-request/:itemIndex" element={<RequestItem/>} />
            {/* <Route path="auth" element={</>/> */}
          </Routes>
          </>  
        }
        
      </div>    
    </RootStoreProvider>

  );
}

export default App;
