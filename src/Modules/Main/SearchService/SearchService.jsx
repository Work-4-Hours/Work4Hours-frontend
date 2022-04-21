import React from 'react'
import { SerchEngine } from 'Components/Layout/SearchEngine/SearchEngine'
import { DivShadow } from 'Components/StyleComponets/DivShadow'
import { useParams } from 'react-router'
import { Title } from 'Components/StyleComponets/Titlte'

import './SearchService.css'
import { Header } from 'Components/Layout/Header/Header'
import { CardServiceSearch } from 'Components/Ui/CardServiceSearch/CardServiceSearch'

export const SearchService = () => {

    const params = useParams()

    const service = {
        price: "200.000",
        photo: "https://res.cloudinary.com/sena-quindio/image/upload/v1646856008/yq79ac21cznrplvdmcqk.png",
        city: "Armenia",
        departament: "Quindio",
        name: "Pinto casas a domicilio Lorem lorem lorem lorem lorem"
    }

    return (
        <>
            <Header/>
            <SerchEngine/>
            <main>
                <div className="center_main_search">
                    <DivShadow className='search_info'>
                        <header className="header_search_info">
                            <Title>{params.question}</Title>
                            <p>2.000 Resultados</p>
                        </header>  
                        <div className="filter_search_info">
                            <p>Filtros de busqueda</p>
                        </div>
                    </DivShadow>
                    <DivShadow className='search_services'>
                        <CardServiceSearch info_service={service}/>
                        <CardServiceSearch info_service={service}/>
                        <CardServiceSearch info_service={service}/>
                    </DivShadow>
                </div>
            </main>
        </>
    )
}
