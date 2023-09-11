import React from 'react'
import { ClipLoader } from 'react-spinners'
import './loader.styles.scss'

function Loader() {
    return (
        <div className='loader'>
            <ClipLoader />
        </div>
    )
}

export default Loader