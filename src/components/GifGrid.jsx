import React from 'react'
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({categoria}) => {

    const {data:images,loading}=useFetchGifs(categoria);

    return (
        <>
        <h3>{categoria}</h3>
        {loading && <p>Loading...</p>  }
        <div className='card-grid animate__animated animate__fadeIn'>
        
        {
                images.map(img => (
                <GifGridItem
                key={img.id}
                {...img}
                />
                ))
            }

        </div>
    </>
  )
}

export default GifGrid
