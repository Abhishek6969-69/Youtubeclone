import { useEffect } from "react";
const useChannel=(id)=>{
    const val=async()=>{
        const url = `https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`;
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
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        val();
    })
}
export default useChannel;