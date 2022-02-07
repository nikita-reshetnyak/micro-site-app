import React from "react"
import icon from './qr-code.png'
import './banner.scss'

const Banner = (props) => {

   return (
      <div className="banner">
         <h6 className="banner__title">ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!
            ПОДАРИТЕ ЕМУ СОБАКУ!</h6>
         <div className="banner__icon">
            <img src={icon} />
         </div>
         <p className="banner__subtext">Сканируйте QR-код
            или нажмите ОК</p>
         <button onClick={props.showScreenBlock} className="banner__button">ОК</button>
      </div>
   )
}
export { Banner }