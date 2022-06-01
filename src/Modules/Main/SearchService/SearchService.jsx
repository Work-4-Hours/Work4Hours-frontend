import React, { useEffect, useState } from 'react'
import { SerchEngine } from 'Components/Layout/SearchEngine/SearchEngine'
import { DivShadow } from 'Components/StyleComponets/DivShadow'
import { useParams } from 'react-router'
import { Title } from 'Components/StyleComponets/Titlte'
import { Header } from 'Components/Layout/Header/Header'
import { CardServiceSearch } from 'Components/Ui/CardServiceSearch/CardServiceSearch'

import './SearchService.css'
import { LoadingCard } from 'Components/Ui/LoadingCard/LoadingCard'
import { Link, useSearchParams } from 'react-router-dom'
import { LoadingCardSearch } from 'Components/Ui/LoadingCardSearch/LoadingCardSearch'

export const SearchService = () => {


    const [params, setParams] = useSearchParams()

    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        const get = async () => {
            setLoading(true)
            fetch(`${process.env.REACT_APP_API}/searchServices`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    serviceName : params.get("n").split('-').join(' ')
                })

            })
            .then(response => response.json())
            .then(user => {
                setResults(user)
            })
            .finally(() => setLoading(false))
        }
        get()
    },[params])

    const formatName = (name)=> {
        return  name.split(' ').join('-').toLowerCase()
    }  
 
    return (
        <>
            <Header/>
            <SerchEngine/>
            <main>
                <div className="center_main_search">
                    <DivShadow className='search_info'>
                        <header className="header_search_info">
                            <Title>{params.get("n").split('-').join(' ')}</Title>
                            <p className='length_results'>{results.length} Busquedas</p>
                        </header>  
                        <div className="filter_search_info">
                            <p className='subtitle_filter_search'>Filtros de busqueda</p>
                        </div>
                    </DivShadow>
                    <DivShadow className='search_services'>
                            {
                                loading ?   
                                <>
                                    <LoadingCardSearch/>
                                    <LoadingCardSearch/>
                                </>                          
                                :
                                results.map((item, index) =>  <Link key={index} to={`/${formatName(item.name)}?sid=${item.id}`}  className='link_card_service'><CardServiceSearch info_service={item}/></Link>)
                            }                      
                    </DivShadow>
                </div>
            </main>
        </>
    )
}
