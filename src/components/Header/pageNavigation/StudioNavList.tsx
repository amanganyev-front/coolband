// modules
// import { useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import mainElementAnimation from "../../../modules/mainElementAnimation";
import { useAppSelector } from "../../../app/hooks";
// styles
import styles from "./_NavList.module.scss";
// ENUMS
import { EBlockID } from "../../../globalTypesEnum";

const StudioNavList: React.FC<Prop.Header.NavListProps> = ({ setIsMenuOpen }) => {
   const activeNavigation = useAppSelector((state) => state.getActiveNavigationState);
   const { pathname } = useLocation();
   const onStudio = pathname === "/studio";

   const handleFunction = () => {
      !onStudio && mainElementAnimation();
      setIsMenuOpen(false);
   };

   return (
      <ul className={styles.navigation}>
         <li>
            <HashLink
               to={"/studio#about"}
               onClick={handleFunction}
               className={activeNavigation.focusOn === EBlockID.ABOUTSTUDIO ? styles.active : ""}
            >
               О студии
            </HashLink>
         </li>
         <li>
            <HashLink
               to={"/studio#courses"}
               onClick={handleFunction}
               className={activeNavigation.focusOn === EBlockID.COURSES ? styles.active : ""}
            >
               Направления
            </HashLink>
         </li>
         <li>
            <HashLink
               to={"/studio#teachers"}
               onClick={handleFunction}
               className={activeNavigation.focusOn === EBlockID.TEACHERS ? styles.active : ""}
            >
               Преподаватели
            </HashLink>
         </li>
         <li>
            <HashLink
               to={"/studio#students"}
               onClick={handleFunction}
               className={activeNavigation.focusOn === EBlockID.STUDENTS ? styles.active : ""}
            >
               Ученики
            </HashLink>
         </li>
         <li>
            <HashLink
               to={"/studio/gallery"}
               onClick={() => {
                  handleFunction(), window.scroll(0, 0);
               }}
               className={
                  activeNavigation.focusOn === EBlockID.GALLERYSTUDIO || activeNavigation.focusOn === EBlockID.CONCERT
                     ? styles.active
                     : ""
               }
            >
               Концерты
            </HashLink>
         </li>
      </ul>
   );
};

export default StudioNavList;