import './SidebarHeader.css';
import Item from './componentes/Item';
import { ImHome } from 'react-icons/im';
import { BsSearch } from 'react-icons/bs';
import {RiMessengerLine} from 'react-icons/ri';
import {FaRegHeart} from 'react-icons/fa';
import {CgAddR} from 'react-icons/cg';
import {VscMenu} from 'react-icons/vsc';



function SidebarHeader(props) {
    return(
        <div className='SidebarHeader'>
            <img src={props.logo} alt="Logo do Instagram" className="logoInstagram" />

            <div className="listItem">
            <Item icone={< ImHome />} nome="Home" />
            <Item icone={<BsSearch/>} nome="Explore" /> 
            <Item icone={<RiMessengerLine/>} nome="Messagens" /> 
            <Item icone={<FaRegHeart/>} nome="Notificatios" />
            <Item icone={<CgAddR/>} nome="Create" /> 

            </div>


            <div className="seuperfil">
                    
                <img className="seu" src="https://img.r7.com/images/lazaro-ramos-21092021180222297?dimensions=301x301"></img>

                <div className="profile">

                    <div className="pricipia">
                    <span className="diferente"> Profile</span>
                    </div>


            </div>


            </div>

            

                <div className="retas">

                <VscMenu className="tres"/> 

                <div className="listras">
                    <span className="denominacao" >More</span>
                </div>

                </div>
                 

           
        












        </div>
    )
}

export default SidebarHeader;