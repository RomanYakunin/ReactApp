
import React, { Children, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "/Users/User/react-app/src/assets/css/PassStyle.css"
import "/Users/User/react-app/src/assets/css/LogStyle.css"
import {TextInput} from '../TextInput/TextInput'
import { RequareAuth } from '../hoc/RequireAuth';
import { PersAcc } from './PersAcc';


export const SignIn = () => {
  const navigate = useNavigate();
  const location =useLocation();

  const fromPage =location.state?.pathname || '/';
    const [field, setField] = useState(null)
    
      const getValue = (fieldName, val) => {
        console.log(fieldName, ": ", val)
        setField({
            ...field,
          [fieldName]: val
        })
      }

      //Показать пароль
      const show_hide_password =(target)=> {
        var input = document.getElementById('password-input');
        if (input.getAttribute('type') == 'password') {
          target.classList.add('view');
          input.setAttribute('type', 'text');
        } else {
          target.classList.remove('view');
          input.setAttribute('type', 'password');
        }
        return false;
      }
    const test = () => {
        for (let item in field) {
           console.log(item,field[item]);
        }
        console.log(field);
        let auth=false;
        <RequareAuth>
          <PersAcc/>
        </RequareAuth>
        //alert('Называние поля:'+ field.fieldName+ 'Значение:'+ field.value)
      }
      
    return (
        <div align="center">
            <div>
              <h3>Авторизация</h3>
            </div>
            <div class="login">
            <TextInput
                type="e-mail"
                name="login"
                field_name="Login"
                placeholder="Login"
                getVal={getValue}
                id="login-input"
            />
            </div>
            <div class="password">
            <TextInput
                type="password"
                name="password"
                field_name="Password"
                placeholder="Password"
                getVal={getValue}
                id="password-input"
            />
            <a href="#" class="password-control" onclick="return show_hide_password(this);"></a>
            </div>
            <button class="green" onClick={() => test()}>Войти</button>
           {fromPage}
        </div>
    );
}
