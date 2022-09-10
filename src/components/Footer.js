import { SocialIcon } from 'react-social-icons';
import "./Footer.css"

const Footer = ()=>{

    return <footer className="footer">
        <h2>Copyrights @ <span>Mohammad Awadallah</span></h2>
        <div className="icons">
                <a href="https://www.linkedin.com/in/mohammad-awadallah-0107491b6/" ><SocialIcon url="https://www.linkedin.com/in/mohammad-awadallah-0107491b6/" /></a>
                <a href="https://github.com/Mohammad-Awadallah?tab=repositories" ><SocialIcon url="https://github.com/Mohammad-Awadallah?tab=repositories" /></a>
                <a href="https://www.instagram.com/mohammad_awadallah_/" ><SocialIcon url="https://www.instagram.com/mohammad_awadallah_/" /></a>
                
              
            </div>
    </footer>

}

export default Footer