import './Post.css';
import BotaoPost from './componentes/BotaoPost';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsChat} from 'react-icons/bs';
import {FiSend} from 'react-icons/fi';
import { IconContext } from 'react-icons';
import {BsEmojiSmile} from  'react-icons/bs';
import {FiMoreHorizontal} from 'react-icons/fi';





function Post (props) {
    return(

        
        <div className="post">


            <div className="topPost">


                    <img className="usuario" src='https://pbs.twimg.com/profile_images/1061994506902474753/zosg1Ycn_400x400.jpg'></img>

                    <span className="nomeusuario">creed</span>

                    <IconContext.Provider value={{size: "30px"}}>

                    <FiMoreHorizontal className="pontinhos"/>

                    </IconContext.Provider>

                    
            </div>


            <div className="imagePost">
                <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/10/creed.jpg?w=746&h=484&crop=1" className='creed' alt="imagem" />
             </div>




<IconContext.Provider value={{size: "30px"}}>
            <div className="bPost">
                <BotaoPost   icone={< AiOutlineHeart  className="btnum"/>} />
                <BotaoPost  icone={<BsChat className="btnum" />}/>
                <BotaoPost  icone={<FiSend className="btnum" />} />    
        </div>
        </IconContext.Provider>


        <div className='curtidas'>
            <span>Curtido por blessed_2k50 e outras pessoas</span>
        </div>


        <div className='comentario'>
            <span> <strong>_ruanmartiniano</strong>  Ai calica</span>
        </div>


        <div className='comentarios'>
        <span>Ver todos os 4 comentários</span>
        </div>


        <div className='data'>
        <span> Ha 1 uma hora</span>
        </div>

        <div className='adicionecomentario'>
            <IconContext.Provider value={{size:"25px"}}>
            <BsEmojiSmile className="emoji"/>
            </IconContext.Provider>
                    


            <input className="caixa" placeholder=' adicione um comentario..'></input>
            

        </div>

        












        </div>
    )
}

export default Post;