import { useState } from 'react'
import './App.css'
import { TwiterFollowCard } from './twiterFollowCard'

const users = [ 
    {
        userName:'midudev',
        name:'meguel angel',
        isFolloWing:'true'
    },
    {
        userName:'benjaminlopezz1',
        name:'maximo lopez',
        isFolloWing:'true'
    },
    {
        userName:'pheralb',
        name:'pablo.h',
        isFolloWing:'false'
    },
    {
        userName:'pacoHdezs',
        name:'paco hdez',
        isFolloWing:'true'
    },
]

export  function App () {
    return (
        <section className='App'>
            {
                users.map(({userName, name, isFolloWing}) => (
                    (
                        <TwiterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFolloWing={isFolloWing}
                        > 
                            {name}
                        </TwiterFollowCard>
                    )
                )) 
            }
        </section>
    
    ) 
}