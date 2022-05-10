import axios from 'axios'
import './Message.css';
import React, {useState,useEffect} from 'react';
const Message=()=>
{
    // state ={
    //     chat:[],
    //     msg:''
    // }
    const [chat,setChat]=useState(["hellos zdfgzsdfgsfdg","dfgsdfgsdfgsdfgsdfgs","sdfgsdfgsdfgsdfgsdfgsdfg"]);
    const [msg,setMsg]=useState("");
    const[data,setData]=useState([{}])

    useEffect(()=>{
        fetch("/members").then(
            res=>res.json()
        ).then(
            data=>{
                setData(data)
                console.log(data)
            }
        )
    },[])
    return(
            <div  >
                
            </div>
        )
    
}
export default Message;