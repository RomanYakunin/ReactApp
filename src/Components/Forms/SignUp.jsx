import React, { useState } from "react";
import { TextInput } from "../TextInput/TextInput";
import "/Users/User/react-app/src/assets/css/LogStyle.css";

export const SignUp = () => {
  const [field, setField] = useState(null);

  const getValue = (fieldName, val) => {
    console.log(fieldName, ": ", val);
    setField({
      ...field,
      [fieldName]: val,
    });
  };
  
  const test = () => {
    for (let item in field) {
       console.log(item,field[item]);
    }
    console.log(field);
    localStorage.setItem('User1', JSON.stringify(field));
    //alert('Называние поля:'+ field.fieldName+ 'Значение:'+ field.value)
  }
  return (
    <div align="center">
      <div>
        <h3>Регистрация</h3>
      </div>
      <div class="login">
        <TextInput
          name="input"
          field_name="FirstName"
          placeholder="First_name"
          getVal={getValue}
          id="login-input"
        />
      </div>
      <div class="login">
        <TextInput
          name="input"
          field_name="LastName"
          placeholder="Last_name"
          getVal={getValue}
          id="login-input"
        />
      </div>
      <div class="login">
        <TextInput
          name="input"
          field_name="email"
          placeholder="email"
          getVal={getValue}
          id="login-input"
        />
      </div>
      <div class="login">
        <TextInput
          name="input"
          field_name="number"
          placeholder="number"
          getVal={getValue}
          id="login-input"
        />
      </div>
      <div class="login">
        <TextInput
          type="password"
          field_name="Password"
          placeholder="Введите пароль"
          getVal={getValue}
          id="login-input"
        />
      </div>
      <div class="login">
        <TextInput
          type="password"
          field_name="PasswordTwo"
          placeholder="Повторите пароль"
          getVal={getValue}
          id="login-input"
        />
      </div>
      <div>
        <button class="green" onClick={() => test()}>
          Регистрация
        </button>
      </div>
    </div>
  );
};
