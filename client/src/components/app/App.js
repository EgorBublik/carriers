import './App.css';
import MenuLeft from '../menu-left/menu-left';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../header/Header';
import UserList from '../user-list/UserList';
import CarriersList from '../carriers-list/carriers-list';
import CarrierItem from '../carrier-item/carrier-item';
import { Routes, Route} from "react-router-dom";
import LoginPage from '../login-page/login-page';
import Course from '../course/course';
import CourseItem from '../course-item/course-item';
import { RootStoreProvider, RootStore } from '../../store/rootstore';

const App = () => {
  const rootStore = new RootStore()
  
  return (
    <RootStoreProvider value={rootStore}>
      <div className="app row">
        {/* <LoginPage/> */}

        <div className="left col-2">
          <MenuLeft/>
        </div>
        <div className="right col-10">
          <Header/>
          
          <Routes>
            <Route index path="users" element={<UserList />} />
            <Route path="carriers" element={<CarriersList />} />
            <Route path="carriers/edit-carrier" element={<CarrierItem />} />
            <Route path="carriers/new-carrier" element={<CarrierItem />} />
            <Route path="route" element={<Course />} />
            <Route path="route/edit-route" element={<CourseItem />} />
          </Routes>
        </div>     
      </div>    
    </RootStoreProvider>

  );
}

export default App;
