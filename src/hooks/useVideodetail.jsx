import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addvideodetail } from "../utils/sidebarslice";
const useVideodetail=(id)=>{
    const dispatch=useDispatch();
    const val=async()=>{
        const url = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '37c9522edcmshd338eb3c547b4a9p139577jsndca81546e3b4',
                'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            dispatch(addvideodetail(result))
            console.log(result,'videodetail');
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        val();
    })
}
export default useVideodetail;