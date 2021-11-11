import styles from "./RightNav.module.css";
import styled from "styled-components";
import { useState } from "react";
import {Link} from "react-router-dom";

export default function RightNav(){
    const [input, setInput] = useState(true);
    const Search = styled.div`
        background-color:${input?"#eff3f4":"white"};
        border: ${input?"none":"1px solid #1d9bf0"};
        padding: 10px;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        margin-top: 5px;
    `;

    const handleSearch = ()=>{
        setInput(!input)
    }

    const data = [
        {
            type:"Sport",
            title:"#IND vs AFG",
            tweets: "1400 Tweets"
        },
        {
            type:"Entertainment",
            title:"#Happy Birthday SRK",
            tweets: "1400 Tweets"
        },
        {
            type:"Cricket",
            title:"#ViratKholi",
            tweets: "1400 Tweets"
        }
    ]

    const follow =[
        {
            profileImg : "/images/profile.jfif",
            name: "Shahnawaz Malek",
            userId : "@Shahnawaz1117"
        },
        {
            profileImg : "/images/profile.jfif",
            name: "Prakhar Tripathi",
            userId : "@Prakhar25"
        },
        {
            profileImg : "/images/profile.jfif",
            name: "Soumya Ranjan",
            userId : "@Soumya14"
        }
    ]

    return (

        <div className={styles.rightNav}>
            <Search>
                <img src={input?"/images/searchLogo.svg":"/images/searchLogoT.svg"} height="15" width="15" alt=""/>
                <input type="text" placeholder="Search Twitter" onClick={handleSearch} onMouseLeave={handleSearch}/>  
            </Search>
            <div className={styles.whats}>
                <p>What’s happening</p>
                {data.map((e)=>(
                    <div className={styles.trends}>
                        <span>{e.type}</span>
                        <p>{e.title}</p>
                        <span>{e.tweets}</span>
                    </div>
                ))}
                <div className={styles.showMore}>
                    <Link to="/explore">Show more</Link>
                </div>
            </div>
            <div className={styles.whats}>
                <p>Who to follow</p>
                {follow.map((e)=>(
                    <div className={styles.perFollow}>
                        <div className={styles.tweetsData}>
                            <img src={e.profileImg} alt="" height="24" width="24" />
                            <div style={{padding:"0px 12px"}}>
                                <span>{e.name}</span>
                                <br />
                                <span>{e.userId}</span>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                ))}
                <div className={styles.showMore}>
                    <Link to="/explore">Show more</Link>
                </div>
            </div>
        </div>
    )
}