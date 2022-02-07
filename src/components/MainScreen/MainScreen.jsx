import './main-screen.scss'
import { Form } from './Form/Form'
import React, { useState } from 'react'
import { FinalScreen } from './FinalScreen/FinalScreen'

const MainScreen = () => {
   const [success, setSuccess] = useState(false)

   return (
      <div className="main-screen background">
         <div className='main-screen__item '>
            {success ? <FinalScreen /> : <Form setSuccess={setSuccess} />}

         </div>
      </div>
   )
}
export { MainScreen }