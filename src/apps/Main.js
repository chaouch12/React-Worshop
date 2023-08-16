import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Main() {
    const navigate = useNavigate()
 const navigateTo=()=>{
    navigate('/features')
 }

    return (
        <div>
            <div>
                <div className=' d-flex justify-content-between bgDark'>
                    <a className=''>
                        <img alt='' style={{ width: 70, height: 50, objectFit: 'contain' }} src='https://public-assets.envato-static.com/assets/logos/envato_market-dde916a48af7413e54aa058fe7ae6856752fca799da4bec355f00aea904bfa19.svg' /></a>
                    <button className='btn btn-green'>Buy Now</button>
                </div>
                <div className='bgWhite spaceAround flex align-items-center'>
                    <div onClick={()=> navigate('/')}>logo</div>
                    <div className='d-flex gap-20'>
                        <a>Demo</a>
                        <div className='link' onClick={navigateTo}>Features</div>
                        <div className='link' onClick={() => navigate('documents')}>documents</div>
                    </div>
                    <button className='btn '>PURCHASE NOW</button>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Main