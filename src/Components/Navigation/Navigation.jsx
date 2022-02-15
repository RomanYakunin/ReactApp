import './StyleNav.css'
import { SignUp } from "../Forms/SignUp";
import { SignIn } from "../Forms/SignIn";
import {useState} from 'react';
import { RequareAuth } from '../hoc/RequireAuth';
import {PersAcc} from '../Forms/PersAcc'
import { useParams,useNavigate,Routes,Navigate, Route, Outlet, Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const {id} = useParams();
  const navigate =useNavigate();
  const [post,setPost]= useState(null);
  console.log(useLocation());
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="registrate" element={<SignUp />}/>
          <Route path="login" element={<SignIn />} />
          <Route path="lk" element={
            <RequareAuth>
              <PersAcc/>
            </RequareAuth>
          }/>
        </Route>
      </Routes>
    </div>
  );
};
function Layout() {
  return (
    <div>
      <nav>
        <ul align='center'>
          <li>
            <Link to="/Registrate">Зарегистрироваться</Link>
          </li>
          <li>
            <Link to="/login">Авторизация</Link>
          </li>
          <li>
            <Link to="/lk">Личный кабинет</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}


