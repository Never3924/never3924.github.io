import styles from "@/app/ui/sideBar/nav-bar.module.css";

import AboutMe from "../home/aboutme";
import Game from "../home/game";
import Home from "../home/home";
import Tool from "../home/tool";

export default function NavBar() {
    return (
        <div className={styles.sideBar}>
            <Home />
            <Game />
            <Tool />
            <AboutMe />
        </div>
    );
}
