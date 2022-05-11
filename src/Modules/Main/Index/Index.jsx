import React, { useContext, useEffect, useState } from "react"
import { Header } from "Components/Layout/Header/Header"
import { CardService } from 'Components/Ui/CardService/CardService'
import { Banner } from "Components/Layout/Banner/Banner"
import { DivShadow } from "Components/StyleComponets/DivShadow"
import { SerchEngine } from "Components/Layout/SearchEngine/SearchEngine"
import { Link } from "react-router-dom"
import { UserContext } from "Context/UserContext"
import { LoadingCard } from "Components/Ui/LoadingCard/LoadingCard"


import './Index.css'
import { useLocalStorage } from "CustomHooks/useLocalStorage"

export const Index = () => {
    const { isAuth } = useContext(UserContext)
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [id, setId] = useLocalStorage('id', '')

    useEffect(()=> {
        const get = async () => {
            setLoading(true)
            fetch(`${process.env.REACT_APP_API}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            })
            .then(response => response.json())
            .then(user => {
                setResults(user)
                setId("oe")
                console.log(id);
            })
            .finally(() => setLoading(false))
        }
        get()
    },[])

    const formatName = (name)=> {
        return  name.split(' ').join('-').toLowerCase()
    }       
    return (
        <>                    
            <Header />
            <SerchEngine/>
            <main>
                <div className="center_main_index">
                    <section className="banner_index">
                        <Banner informaction={{title: "Services", info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."}} image={"https://res.cloudinary.com/sena-quindio/image/upload/v1646856008/yq79ac21cznrplvdmcqk.png"} />               
                    </section>
                    <p className="title_index">Mejor calificados</p>
                    <section className='services_index'>
                        <DivShadow className='container_pricipal_servieces'>                                                 
                            {
                                loading ?   
                                <>
                                    <LoadingCard/>
                                    <LoadingCard/>
                                </>                          
                                :
                                results?.map((item, index) =>  <Link key={index} to={`/${formatName(item.name)}?sid=${item.id}`} className='link_card_service'><CardService info={item} /></Link>)
                            }                                
                        </DivShadow>                 
                    </section>
                </div>
            </main>
        </>
    )
}