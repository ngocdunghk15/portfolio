import {ReactNode} from "react";
import styles from './style.module.scss';
import {Outlet} from "react-router-dom";
import Header from "./Header";

interface AppLayoutProps {
  children?: ReactNode;
}

function AppLayout(props: AppLayoutProps) {
  return <div className={styles.wrapper}>
    <div className={styles.container}>
      <Header/>
      {props?.children || <Outlet/>}
    </div>
  </div>
}

export default AppLayout