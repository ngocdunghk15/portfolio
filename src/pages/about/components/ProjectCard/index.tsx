import styles from './style.module.scss';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface ProjectCardProps {
  key: string,
  name: string,
  description: string,
  github: string,
  demo: string
}

function ProjectCard(props: ProjectCardProps) {
  return <div className={styles.wrapper}>
    <FontAwesomeIcon icon={faGithub} size={'3x'}/>
    <span className={styles.title}>{props?.name}</span>
    <span className={`${styles.para} line-clamp-4`}>
      {props?.description}
    </span>

    <div className={'w-full flex justify-center gap-[12px]'}>
      <button className={styles.github} type={'button'} onClick={() => {
        window.open(props?.github, '_blank')
      }}>
        Github
      </button>
      <button className={styles.demo} type={'button'} onClick={() => {
        window.open(props?.github, '_blank')
      }}>
        Demo
      </button>
    </div>
  </div>
}

export default ProjectCard;