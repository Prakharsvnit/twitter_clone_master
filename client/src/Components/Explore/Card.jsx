import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../App.css"
import React from 'react'
// display:flex
const Card = ({title,url,urlToImage}) => {
    return (
        <a href={url} target="_blank" style={{textDecoration: 'none',color:"black"}} rel="noopener noreferrer">
            <div class="container-fluid g-0 p-0">
            <div class="row ">
                <div class="mt-2">
                    <div class="card p-0">
                        <div style={{display: "flex"}}>
                            <div class="card-body">
                                <h4 class="card-title" style={{fontSize:"15px"}}>{title}</h4>                            </div>
                            <div class="img-square-wrapper">
                                <img class="" src={urlToImage} style={{width:"150px"}} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</a>
    )
}

export default Card
