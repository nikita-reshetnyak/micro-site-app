import React from "react"
import './checkbox.scss'
const Checkbox = () => {
   return (
      <div className="form-block-item">
         <input className="form-block-input" id="1" type="checkbox" required />
         <label htmlFor="1"> <span>Согласие на обработку персональных данных</span> </label>
      </div>
   )
}
export { Checkbox }