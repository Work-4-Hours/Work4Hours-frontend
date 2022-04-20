import { SerchEngine } from 'Components/Layout/SearchEngine/SearchEngine'
import { SearchBox } from 'Components/Ui/SearchBox/SearchBox'
import { useParams } from 'react-router'

import React from 'react'
import { DivShadow } from 'Components/StyleComponets/DivShadow'
import { Title } from 'Components/StyleComponets/Titlte'

export const SerachService = () => {

    const params = useParams()
    console.log(params);
    return (
        <>
            <SerchEngine/>
            <main>
                <div className="center_main_search">
                    <DivShadow>
                        <Title>{params.question}</Title>
                    </DivShadow>
                    <DivShadow>
                        
                    </DivShadow>
                </div>
            </main>
        </>
    )
}
