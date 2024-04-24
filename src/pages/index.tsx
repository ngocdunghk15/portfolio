import styles from "./style.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTerminal} from "@fortawesome/free-solid-svg-icons";
import {TypeAnimation} from "react-type-animation";
import {useNavigate} from "react-router-dom";
import Footer from "../layouts/Footer";
import CodeBlock from "./components/CodeBlock";

function HomePage() {
  const navigate = useNavigate();
  return <div>
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        <FontAwesomeIcon icon={faTerminal}/>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            ' console.log(\'Call me Ngoc Dung\')',
            1000,
          ]}
          speed={50}
        />
      </h2>
      <div className={'flex flex-col lg:flex-row gap-[64px]'}>
        <div className={'flex-1 animate__animated animate__fadeInLeft animate__fadeIn animate__fast'}>
          <div>
            <h1 className={`${styles.titleMain}`}>
              Front-end Developer
            </h1>
            <p className={`${styles.para}`}>
              I'm a front-end developer with more than a
              year of experience in web development and building Chrome
              extensions. I have a strong passion for crafting creative solutions and am fully committed to my work.
              Leveraging my creativity, technical expertise, and meticulous approach.
            </p>
            <div className={'mt-8'}>
              <CodeBlock/>
            </div>
          </div>
        </div>
        <div className={'flex-1 animate__animated animate__fadeInRight animate__fadeIn animate__fast'}>
          <img src={'/public/banner.svg'} alt={'banner'}/>
          <div className={'flex flex-col items-center mt-4'}>
            <button className={`${styles.primaryButton} mb-3`} type={'button'}>
              <a className={'w-full h-full block px-[18px] py-[8px]'} href={'mailto:ngocdunghk15@gmail.com'}>
                Contact me
              </a>
            </button>
            <button className={styles.button} type={'button'} onClick={() => {
              navigate('/about')
            }}>
              More about me
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
}

export default HomePage;
