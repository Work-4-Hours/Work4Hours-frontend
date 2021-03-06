import { DivShadow } from 'Components/StyledComponets/DivShadow'
import { Button } from 'Components/Ui/Button/Button'
import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

export const NotFound = () => {
    return (
        <>
            <main>
                <div className="center_main_notfound">
                    <DivShadow className='not_found'>

                        <div className="info_not_found">
                            <div>
                            
                            <h1 className='title_not_found'>¡Oops!</h1>
                            <p className='text_not_found'>Pagina no encontrada</p>
                            </div>
                            <p className='text_error_not_found'>Error 404</p>
                            <Link className='link_index_notfound' to='/'>
                            <Button value='Ir a inicio'/>
                            </Link>
                        </div>

                        <img className='image_not_found' src="https://cdn3d.iconscout.com/3d/premium/thumb/404-3025721-2526919.png" alt="" />
                    </DivShadow>
                </div>
            </main>
        </>
    )
}
