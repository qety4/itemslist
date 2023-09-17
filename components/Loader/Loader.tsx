import React from 'react'
import { PuffLoader } from 'react-spinners'
import './loader.styles.scss'

function Loader() {
    return (
        <div className='loader'>
            <PuffLoader/>
        </div>
    )
}

export default Loader