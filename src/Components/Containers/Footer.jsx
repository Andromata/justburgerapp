import React from "react";
import * as ImIcons from "react-icons/im";
import * as SiIcons from "react-icons/si";
import { IconContext } from 'react-icons'
import mercat from './mercat.png'
import "../../Styles/Containers/Footer.scss";
export default function Footer() {
  return (
    <div className="full-width">
      <footer className="footer">
        <div className="contact">
          <div className="links">
            <div>
              <a className="linktext" href="/quienessomos">
                Quiénes Somos
              </a>
            </div>
            <div>
              <a className="linktext" href="/nuestrastiendas">
                Nuestras Tiendas
              </a>
            </div>
            <div>
              <a className="linktext" href="/preguntasfrecuentes">
                Preguntas Frecuentes
              </a>
            </div>
            <div>
              <a className="linktext" href="/mediosdepago">
                Medios de Pago
              </a>
            </div>
            <div>
              <a className="linktext" href="/ingredientes">
                Ingredientes
              </a>
            </div>
            <div>
              <a className="linktext" href="/terminosycondiciones">
                Términos y condiciones
              </a>
            </div>
            <div>
              <a className="linktext" href="/politicadeprivacidad">
                Política de Privacidad
              </a>
            </div>
            <div>
              <a className="linktext" href="/menuQR">
                Menú
              </a>
            </div>
          </div>
        </div>
        <IconContext.Provider value={{ color: ' #fff ', size: '30px' }}> 
        <div className="social">
          <div className="social-link row middle">
            <a
              class="text-white row center middle m-right-2 m-left-2"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/JustburgerCl-100456028446220"
            >
              <ImIcons.ImFacebook2 />
            </a>
            <a
              class="text-white row center middle m-right-2 m-left-2"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/justburgercl/"
            >
              <SiIcons.SiInstagram />
            </a>
            <a
              class="text-white row center middle m-right-2 m-left-2"
              rel="noopener noreferrer"
              target="_blank"
              href="https://vm.tiktok.com/ZS5fY9mM/"
            >
              <SiIcons.SiTiktok />
            </a>
          </div>
        </div>
        </IconContext.Provider>
        <div className="sponsor">
          <div>
         Powered by
         <div>
         <img class="sponsor-logo" src={mercat} alt="Merkat Logo" />
         </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
