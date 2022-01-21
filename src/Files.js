import axios from "axios";
import {useState} from "react";
import {posts} from "./mainPage";

function seeYourFiles(props){
    // eslint-disable-next-line array-callback-return
    posts.map((post)=>{
        console.log(post);
    })
    let cards = posts.map((post)=>{
            return(
                <div className="card">
                    <h1>{post.title}</h1>
                    <a href={'https://yefee-cloud-backend.herokuapp.com' + post.url.replace('.','')} download={post.url.replace('./','')}><button ><i className="fas fa-download"></i> Download</button></a>
                </div>
            )
        })

        return(
            <div className="Files">
                <div onClick={() => props.turnback(1)} className="return"><i className="fas fa-arrow-left"></i></div>
                {cards}
            </div>
        )
}
export default seeYourFiles;