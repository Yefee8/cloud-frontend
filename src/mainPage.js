import {useRef, useState} from "react";
import axios from "axios";

function mainPage(props){
    posts = [];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false)
    function goFiles(){
        axios.get(`https://yefee-cloud-backend.herokuapp.com/allfiles?username=${props.username}`).then(r => {
            for(let key in r.data){
                let allFiles = {
                    title:r.data[key].file.title,
                    url:r.data[key].file.url
                }
                posts.push(allFiles)
                console.log(posts);
            }
            props.wheregoing(2);
        })
    }

    function sendFile(event){
                setLoading(true)
        alert("IMPORTANT: if you sent folder, please winrar and send it. Folders cannot be uploaded in clouds ")
        const formData = new FormData();
        const file = event.target.files[0]
        formData.append('file', file)
        axios.post('https://yefee-cloud-backend.herokuapp.com/file', formData).then(r=>{
            setLoading(false)
            alert('file successfully uploaded!')
        })
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inputFile = useRef(null)
    return(
        <div className="mainpage">
            {loading &&
            <div className="loading">
                <div className="spin"></div>
            </div>
            }
            <h1>Welcome {props.username}</h1>
            <input type='file' id='file' ref={inputFile} style={{display: 'none'}} name="images" onChange={(event) => sendFile(event)}/>
            <button onClick={() => inputFile.current.click()}>
                    <i className="fas fa-upload"></i>
                    Upload files
            </button>
            <button onClick={() => goFiles()}>
                <i className="fas fa-file-video"></i>
                See your files</button>
        </div>
    )
}
export let posts;
export default mainPage;
