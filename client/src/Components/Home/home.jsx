import axios from "axios";
import FormData from 'form-data'

import "./home.css";
import img1 from "../../images/1.svg";
import img2 from "../../images/2.svg";
import img3 from "../../images/3.svg";
import img4 from "../../images/4.svg";
import img5 from "../../images/5.svg";
import chat from "../../images/chat.svg";
import circle from "../../images/circle.svg";
import tick from "../../images/tick.PNG";
import heart from "../../images/heart.svg";
import arrow from "../../images/arrow.svg";
import cross from "../../images/cross.svg";
import { useState } from "react";

function Home(){

    const [inp,setInp] = useState("")
    const [src,setSrc] = useState("")

    const loadFile = async function(evt) {
        let change = document.getElementById("tweet");
        //console.log(evt.target.files[0] ,"aaaa")
        if(evt.target.files[0]){
            document.getElementById("upload").src = URL.createObjectURL(evt.target.files[0]);
            setSrc(document.getElementById("upload").src);
            document.getElementById("up").style.display = "block"  
        }
        else{
            console.log(evt.target.files[0],"aaa")
            document.getElementById("up").style.display = "none"
            setSrc(document.getElementById("upload").src)
        }

        document.getElementById("show").style.display = "block"
        change.style.backgroundColor = "rgb(29,155,240)"
        // const reader= new FileReader();
        // 
        // console.log(document.getElementById("please").src);
        // document.getElementById("please").src = reader.result
        // console.log(reader.readAsDataURL(event.target.files[0]));
        
        // for (let file of Array.from(this.myAlbumImages)) {
        // formData.append("files", file);
        // }
        // formData.append("ALBUM", this.albumName);
        // formData.append("DESCRIPTION", this.albumDesc);
        
     
//         let formData = new FormData()
//         formData.append('file', evt.target.files[0],evt.target.files[0].name);
        
//         console.log(formData)
        
//         const inp = {
//             first_name : "mud",
//             last_name : "sir",
//             profile_pic : evt.target.files[0].name
//         }

//         console.log(evt.target.files[0],"aa")
//         console.log(inp,"inp")
//         /* {
//   fieldname: 'profile_pic',
//   originalname: 'resume.PNG',
//   encoding: '7bit',
//   mimetype: 'image/png'
// }*/
//         axios.post("http://localhost:2345/user",inp,{
//             headers: {
//  
//             'Content-Type': 'multipart/form-data'}
//           })
//         .then((res)=>{
//             console.log(res.data)
//         })
//         .catch((err)=>{
//             console.log(err.message);
//         })

        // var tgt = evt.target
        // var files = tgt.files;
        // // FileReader support
        // if (FileReader && files && files.length) {
        //     var fr = new FileReader();
        //     fr.onload = function () {
        //         document.getElementById("please").src = fr.result;
        //         console.log(evt.target.files[0])
        //     }
        //     fr.readAsDataURL(files[0]);
        // }
    };

    let data = [
        {
            userImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBG4Jo7-Edr499P5EvJCghLA-_7_ISj4GRPA&usqp=CAU",
            userName : "Messi",
            description : "Im the best player and i am the goat ,beleive it or not . If you beleive it,that's good ,and even if you don't doesnt matter tbh. hahahahha",
            ImgOrVed : "https://i.pinimg.com/originals/f8/41/ac/f841ac2befaedda240c55a06b23b33ec.gif"
        },
        {
            userImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBG4Jo7-Edr499P5EvJCghLA-_7_ISj4GRPA&usqp=CAU",
            userName : "Messi",
            description : "Im the best player and i am the goat ,beleive it or not . If you beleive it,that's good ,and even if you don't doesnt matter tbh. hahahahha",
            ImgOrVed : "https://i.pinimg.com/originals/f8/41/ac/f841ac2befaedda240c55a06b23b33ec.gif"
        },
        {
            userImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBG4Jo7-Edr499P5EvJCghLA-_7_ISj4GRPA&usqp=CAU",
            userName : "Messi",
            description : "Im the best player and i am the goat ,beleive it or not . If you beleive it,that's good ,and even if you don't doesnt matter tbh. hahahahha",
            ImgOrVed : "https://i.pinimg.com/originals/f8/41/ac/f841ac2befaedda240c55a06b23b33ec.gif"
        }
    ]

    const handleChange = (e)=>{
        setInp(e.target.value);
        let change = document.getElementById("tweet");
        
        if(!e.target.value && !src){
            change.style.backgroundColor = "rgb(142,205,248)"
        }
        else{
            change.style.backgroundColor = "rgb(29,155,240)"
        }
    }

    function cut(){
        let change = document.getElementById("tweet")
        if(!inp){
            change.style.backgroundColor = "rgb(142,205,248)"
        }

        document.getElementById("upload").src = "";
        setSrc("")
        document.getElementById("up").style.display = "none"
    }

    const handleMouse = (e)=>{
        let change = document.getElementById("tweet")
        
        if(String(change.style.backgroundColor) !== "rgb(142, 205, 248)"){
            change.style.backgroundColor = "rgb(18, 142, 224)"
        }
        console.log(change.style.backgroundColor,"Aaa")
        
    }

    const handleMouse1 = ()=>{
        let change = document.getElementById("tweet")
        if(String(change.style.backgroundColor) === "rgb(18, 142, 224)"){
            change.style.backgroundColor = "rgb(29,155,240)"
        }
    }

    return <div>
        <div className="firstBorder home">
            <span style={{marginLeft:"1px"}}>Home</span>
            <img style={{width:"20px",float:"right",marginTop:"1%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOruPY6oYEC6iG3ZEQRf2fM5uXk4EYEIQUYxFuJyTuY-lRLvtLCyzQ6xFE9lb6FyL1XVs&usqp=CAU"/>
        </div>
        <div style={{borderTop:"none",paddingBottom:"20px",marginTop:"50px"}} className="firstBorder">
            <div>
                <img alt="img" style={{width:"50px",height:"50px",borderRadius:"50%",float:"left"}} src="https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIX4fdymadei7FiL-19pxFAWPLEJgQlNEww&usqp=CAU"/>
                <input onChange={handleChange} onClick={()=>{document.getElementById("show").style.display = "block"}} style={{margin:"11px 0px 0px 13px",border:"none",height:"40px",fontSize:"20px"}} placeholder="What's happening?" type="text"/>
                <div id="up" style={{display:"none"}}>
                   <img id="upload" className="mainPic"/>
                   <img onClick={cut} style={{width:"30px",borderRadius:"50%",position:"absolute",top:"130px",left:"485px"}} src={cross}/>
                </div>
                <div id="show" style={{margin:"5px 0px 0px 60px",display:"none"}}>
                    <img alt="img" style={{width:"22px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzplmqIDtypwvhcctX75fFFYMhpBi650NwxO1xhC9f3ZJrCHXpuN0c58fM6Hzv9E7BFjA&usqp=CAU"/>
                    <span style={{fontSize:"13.5px",fontFamily:"sans-serif",color:"rgb(29,155,240)"}}>Everyone can reply</span>
                </div>
            </div>
            <div className="divProfile">
                <label style={{width:"35px"}} htmlFor="files" className="btn"><img alt="img" style={{width:"18.5px"}} src={img5}/></label>
                <input onChange={loadFile} alt="img" id="files" style={{color:"transparent",visibility:"hidden",width:"1px"}} type='file' accept="image/*,video/*" />
                <label style={{width:"35px"}} className="btn"><img alt="img" style={{width:"18.5px"}} src={img4}/></label>
                <label style={{width:"35px"}} className="btn"><img alt="img" style={{width:"18.5px"}} src={img3}/></label>
                <label style={{width:"35px"}} className="btn"><img alt="img" style={{width:"18.5px"}} src={img2}/></label>
                <label style={{width:"35px"}} className="btn"><img alt="img" style={{width:"18.5px"}} src={img1}/></label>
                <button onMouseOver={handleMouse} onMouseLeave={handleMouse1} id="tweet" style={{backgroundColor:"rgb(142,205,248)"}} className="btn1">Tweet</button>
            </div>
        </div>
        {
            data.map((el)=>{
                return <div style={{borderTop:"none"}} className="first">
                            <div>
                                <img alt="img" style={{width:"50px",height:"50px",borderRadius:"50%",float:"left"}} src={el.userImg}/>
                                <div className="desc">{el.userName}<img style={{width:"23px",marginLeft:"3px"}} src={tick}/><span style={{color:"rgb(123,136,146)",fontWeight:"400",marginLeft:"3px",fontSize:"17.1px"}}>@{el.userName}</span></div>
                                <div className="description">{el.description}</div>
                            </div>
                            <img className="mainPic" src={el.ImgOrVed}/>
                            <div style={{marginLeft:"56px"}}>
                                <img style={{width:"40px"}}  src={chat}/><span style={{fontSize:"12px"}}>111</span>
                                <img style={{width:"44px",marginLeft:"73px"}} src={circle}/><span style={{fontSize:"12px"}}>271</span>
                                <img style={{width:"44px",marginLeft:"73px"}} src={heart}/><span style={{fontSize:"12px"}}>373</span>
                                <img style={{width:"44px",marginLeft:"73px"}} src={arrow}/>
                            </div>
                        </div>
            })
        }
    </div>
}

export {Home}