import React, { useState, useRef } from 'react'
import './form-styles.scss'
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { Checkbox } from '../Checkbox/Checkbox';

const Form = (props) => {

   const [input, setInput] = useState('')
   const [layout, setLayout] = useState("default");
   const [message, setMessage] = useState('')
   const [submitted, setSubmitted] = useState(true)
   const keyboard = useRef();

   const onChangeInput = event => {
      const input = event.target.value;

      setInput(input);
      keyboard.current.setInput(input);
   };

   const onChange = input => {
      setInput(input);
      console.log("Input changed", input);
   };



   function ValidPhone(e) {
      e.preventDefault()
      let re = /^\+\d[\d\(\)\ -]{4,14}\d$/;
      let myPhone = input;
      let valid = re.test(myPhone);
      if (valid) {

         setSubmitted(true)
         props.setSuccess(true)

      }
      else {
         setSubmitted(false)
         setMessage('Неверно введен номер');
      }
      return valid;
   }


   return (
      <div className='form__content'>
         <h3 className='form__title'>Введите ваш номер
            мобильного телефона</h3>
         <form onSubmit={ValidPhone} >
            <input
               type='tel'
               name='phone'
               onChange={onChangeInput}
               value={input}
               placeholder={"+7"}
               className={'form__input' + (!submitted ? ' is-invalid' : '')}
               required
            />
            <span className='form__sub-text'>и с Вами свяжется наш менеждер для дальнейшей консультации</span>
            <Keyboard
               keyboardRef={r => (keyboard.current = r)}
               layoutName={layout}
               onChange={onChange}
               theme={"hg-theme-default hg-layout-default myTheme"}
               layout={{
                  default: ["1 2 3 4 5 6 7 8 9 0 + {bksp}",
                  ]
               }}
               display={{
                  '{bksp}': 'Стереть',
               }
               }
               buttonTheme={[
                  {
                     class: "custom-keyboard",
                     buttons: "1 2 3 4 5 6 7 8 9 0 +  {bksp}"
                  },
               ]}


            />
            {submitted ? <Checkbox /> : <p className='error'>{message}</p>}



            <button className='form__button' type='submit'>Подтвердить номер</button>
         </form>
      </div>
   )


}
export { Form }