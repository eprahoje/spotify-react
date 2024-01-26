import React from "react";
import '../../componentes/vars.css';
import './Sidebar.css';

import logoSpotify from '../../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faBook, faGlobe } from "@fortawesome/free-solid-svg-icons";




const Sidebar = () => {
    return(
        <div className="sidebar">
        <nav className="sidebar__navigation">
            <div className="logo">
                <a href="">
                    <img src={logoSpotify} alt="Logo do Spotify com fundo transparente"/>
                </a>
            </div>

            <ul>
                <li>
                    <a href="">
                        <span><FontAwesomeIcon icon={faHome}/></span>
                        <span>Início</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span><FontAwesomeIcon icon={faSearch} /></span>
                        <span>Buscar</span>
                    </a>
                </li>
            </ul>

        </nav>
        <div className="library">
            <div className="library__content">
                <button className="library__content__button">
                    <span><FontAwesomeIcon className="faBook" icon={faBook}/></span>
                    <span>Sua biblioteca</span>
                </button>
                <span className="fa fa-plus"></span>
            </div>

            <section className="library__playlist">
                <div className="library__playlist__content">
                    <span className="text title">Crie sua primeira playlist</span>
                    <span className="text subtitle">É fácil, vamos te ajudar.</span>
                    <button type="button" className="playlist__content__button">Criar playlist</button>
                </div>
            </section>

            <div className="cookies">
                <a href="">Cookies</a>
            </div>
            <div className="languages">
                <button className="languages__button">
                    <span><FontAwesomeIcon icon={faGlobe}/></span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
    </div>
    )
};

export default Sidebar;