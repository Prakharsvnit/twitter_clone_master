import React, {useState, useEffect} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import chat from "./images/chat.svg";

import axios from "axios";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const TransitionsModal = ({allComment,rerenderVar,rerenderfnc})=> {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    
    const [comment, setComment] = useState("");

    console.log(comment);

    const handlePostComment = () => {
        axios.post("http://localhost:3007/comment", {
          tweetId: allComment._id,
          commentTitle: comment,
          commentPic: "",
          userId: "618f5ec22f9a3226e18fe5e8",                // fetch from redux important 
          userName: "ronaldo",
          userImage: "",
          userUserName : "cr7football"
            
        })
          .then((data) => {
            rerenderfnc(!rerenderVar);
          })
    }

    return (
      
      <div>
            <div className="d-flex flex-row" style={{margin:"auto"}}>
              <img style={{ width: "40px" }} onClick={handleOpen} src={chat} /><p style={{ fontSize: "12px",alignSelf:"center",margin:"auto" }}>{allComment.comment.length}</p>
            </div>
            
            
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
                    <Box sx={style}>
                    {allComment.userId.name}.....blue tick......{allComment.userId.username}....time <br />
                    {allComment.title}                                                               <br />
                        Replying to {allComment.userId.username}

                        <textarea onChange={(e) => { setComment(e.target.value) }} cols="30" rows="10"></textarea> <br />
                        
                        <button onClick={handlePostComment}>Post</button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
