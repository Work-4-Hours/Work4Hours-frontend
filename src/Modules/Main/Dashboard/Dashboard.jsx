import { Header } from 'Components/Layout/Header/Header'
import { DivShadow } from 'Components/StyleComponets/DivShadow'
import { Title } from 'Components/StyleComponets/Titlte'
import { Button } from 'Components/Ui/Button/Button'
import { LinkOption } from 'Components/Ui/LinkOption/LinkOption'
import { Link } from 'react-router-dom'
import React from 'react'

import './Dashboard.css'

export const Dashboard = () => {
  return (
      <>
        <Header/>
        <main className='main_dasboard'>
            <div className="center_dashboard">
                <div className="aside_operations_dashboard">    
                    <DivShadow className='title_dasboard'>
                        <p className='title_dashboard_info'>Administrar servicios</p>
                    </DivShadow>
                    <DivShadow>
                        <LinkOption link='' text='Publicados' />
                        <LinkOption link='' text='Borradores' />
                        <Link to='services/add'><Button value='Agregar servicio' /></Link>
                    </DivShadow>
                </div>
                <DivShadow className='main_dashboard'>
                    <Title>Mis servicios</Title>
                </DivShadow>
            </div>
        </main>
      </>
  )
}
