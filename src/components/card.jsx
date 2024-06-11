import React from 'react'

function Card(props) {
   
    const{id,snippet}=props.item;
    console.log(props.item)
  return (
    <div  className='  '>
        <div className=''>
            <img className=' w-96 rounded-lg ' src={snippet?.thumbnails?.high?.url} />
        </div>
        <p className=' w-96 font-bold'>{(snippet.title)}</p>
    </div>
  )
}

export default Card