import styles from './LeftNav.module.css';
import {NavLink, useLocation} from 'react-router-dom';

const navTabs = [ 
    {
        title: "Home",
        logo: "/images/home.svg",
        activeLogo:"/images/homeActive.svg",
        path: "/home",
    },
    {
        title: "Explore",
        logo: "/images/explore.svg",
        activeLogo:"/images/exploreActive.svg",
        path: "/explore",
    },
    {
        title: "Notifications",
        logo: "/images/notifications.svg",
        activeLogo:"/images/notificationsActive.svg",
        path: "/notifications",
    },
    {
        title: "Messages",
        logo: "/images/messages.svg",
        activeLogo:"/images/messagesActive.svg",
        path: "/messages",
    },
    {
        title: "Bookmarks",
        logo: "/images/bookmarks.svg",
        activeLogo:"/images/bookmarksActive.svg",
        path: "/bookmarks",
    },
    {
        title: "Lists",
        logo: "/images/lists.svg",
        activeLogo:"/images/listsActive.svg",
        path: "/lists",
    },
    {
        title: "Profile",
        logo: "/images/profile.svg",
        activeLogo:"/images/profileActive.svg",
        path: "/profile",
    }
]

export default function LeftNav(){
    const {pathname} = useLocation();

    return <div className={styles.leftNav}>
        <div>
            <img className={styles.logo} src="/images/logo.svg" alt="" width="28" height="28" />
            <ul>
                {navTabs.map((e, i)=>(
                    <li key={i}>
                        <img alt="" src={pathname===e.path?e.activeLogo:e.logo} height="22" width="22" />
                        <NavLink activeClassName={styles.active_tag} to={e.path}>{e.title}</NavLink>
                    </li>
                ))}
                <li>
                    <img alt="" src="/images/more.svg" height="22" width="22" />
                    <NavLink to="#">More</NavLink>
                </li>
            </ul>
            <button className={styles.tweetBtn}>Tweet</button>
        </div>
        <div className={styles.profile}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <img alt="" src="/images/more.svg" height="40" width="40" />
                <div className={styles.user}>
                    <span>User Name</span>
                    <br />
                    <span>User ID</span>
                </div>
            </div>
            <img alt="" src="/images/logOutTab.svg" height="22" width="22" />
        </div>
    </div>
}