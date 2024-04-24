import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTerminal} from "@fortawesome/free-solid-svg-icons";
import {TypeAnimation} from "react-type-animation";
import styles from './styles.module.scss';
import ProjectCard from "./components/ProjectCard";
import Footer from "../../layouts/Footer";

const projects = [
  {
    key: 'hosting-service',
    name: 'Hosting service',
    description: 'A comprehensive hosting platform tailored for static websites and dynamic web services. As a passionate developer, I\'ve embarked on this endeavor to provide individuals and businesses with a reliable, scalable, and secure solution for their online presence.',
    github: 'https://github.com/ngocdunghk15/hosting-service',
    demo: 'https://uet-web-hosting.vercel.app/'
  }, {
    key: 'cookies-etl',
    name: 'Manage cookies extension',
    description: 'An innovative tool designed to streamline the management of cookies on websites. As privacy concerns continue to gain prominence in the digital landscape, this project aims to empower website owners and users alike with greater transparency and control over their online data.',
    github: 'https://github.com/ngocdunghk15/Cookies-ETL',
    demo: ''
  }, {
    key: 'online-library',
    name: 'D-Free books',
    description: 'Welcome to D-Free Books, a cutting-edge project aimed at revolutionizing the way libraries manage their book collections and borrowing processes. With a focus on efficiency, accessibility, and user experience, D-Free Books is poised to become the go-to solution for libraries seeking to modernize their operations and enhance the borrowing experience for patrons.',
    github: 'https://github.com/ngocdunghk15/online-library',
    demo: ''
  },
]

function AboutPage() {
  return <div className={''}>
    <h2 className={styles.title}>
      <FontAwesomeIcon icon={faTerminal}/>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed once, initially
          ' Specialized',
          1000,
        ]}
        speed={50}
      />
    </h2>
    <h3 className={styles.primaryTitle}>
      Know Who I'm
    </h3>

    <div className={'lg:flex gap-[40px]'}>
      <div className={'flex-1 animate__animated animate__fadeInLeft animate__fadeIn animate__fast'}>
        <h3 className={styles.subTitle}>
          0.1 About me
        </h3><p className={styles.para}>
        I'm a front-end developer with more than a
        year of experience in web development and building Chrome
        extensions. I have a strong passion for crafting creative solutions and am fully committed to my work.
        Leveraging my creativity, technical expertise, and meticulous approach.
      </p>
        <h3 className={styles.subTitle}>
          0.2 Interests
        </h3><p className={styles.para}>
        During my leisure time, I thrive on being both dynamic and imaginative. Delving into books is another passion of
        mine, enriching my understanding and igniting my creativity. Whenever inspiration strikes, I immerse myself in
        software development endeavors as a hobby.
      </p>
      </div>
      <div className={'flex-1 animate__animated animate__fadeInRight animate__fadeIn animate__fast'}>
        <h3 className={styles.subTitle}>
          0.3 Technical skills
        </h3>
        <div className="mb-1 text-base font-medium dark:text-gray-400 text-gray-400">HTML/CSS/Javascript</div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div className="bg-[#149eca] h-1.5 rounded-full dark:bg-[#149eca] w-[80%]"></div>
        </div>
        <div className="mb-1 text-base font-medium dark:text-gray-400 text-gray-400">ReactJS/NextJS</div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div className="bg-[#149eca] h-1.5 rounded-full dark:bg-[#149eca] w-[85%]"></div>
        </div>
        <div className="mb-1 text-base font-medium dark:text-gray-400 text-gray-400">Material UI/Ant
          design/TailwindCSS
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div className="bg-[#149eca] h-1.5 rounded-full dark:bg-[#149eca] w-[70%]"></div>
        </div>
        <div className="mb-1 text-base font-medium dark:text-gray-400 text-gray-400"> Redux/Redux toolkit
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div className="bg-[#149eca] h-1.5 rounded-full dark:bg-[#149eca] w-[75%]"></div>
        </div>
        <div className="mb-1 text-base font-medium dark:text-gray-400 text-gray-400"> Github/Gitlab/Bitbucket
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div className="bg-[#149eca] h-1.5 rounded-full dark:bg-[#149eca] w-[70%]"></div>
        </div>
      </div>
    </div>
    <div className={'animate__animated animate__slideInUp'}>
      <h3 className={`${styles.subTitle} `}>
        0.4 My recent Works
      </h3>
      <div className={'grid grid-cols-12 gap-[20px] mt-4 mb-4'}>
        {projects.map((project) => (
          <div className={'col-span-12 md:col-span-6 lg:col-span-4'}>
            <ProjectCard {...project}/>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
  </div>
}

export default AboutPage;