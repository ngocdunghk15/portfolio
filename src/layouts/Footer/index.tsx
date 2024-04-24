import {faFacebook, faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Footer() {
  return <div className={'flex justify-between my-8'}>
    <span>
      Design and develop by Ngoc Dung
    </span>
    <div className={'flex gap-[24px] items-center cursor-pointer'}>
      <FontAwesomeIcon icon={faGithub} size={'xl'} onClick={() => {
        window.open('https://github.com/ngocdunghk15', '_blank')
      }}/>
      <FontAwesomeIcon icon={faFacebook} size={'xl'} onClick={() => {
        window.open('https://www.facebook.com/profile.php?id=100006444932422', '_blank')
      }}/>
      <FontAwesomeIcon icon={faLinkedin} size={'xl'} onClick={() => {
        window.open('https://www.linkedin.com/in/d%C5%A9ng-ho%C3%A0ng-ng%E1%BB%8Dc-71748929a/', '_blank')
      }}/>
      <FontAwesomeIcon icon={faInstagram} size={'xl'} onClick={() => {
        window.open('https://www.instagram.com/dephrish_2512/', '_blank')
      }}/>
    </div>
  </div>
}

export default Footer;