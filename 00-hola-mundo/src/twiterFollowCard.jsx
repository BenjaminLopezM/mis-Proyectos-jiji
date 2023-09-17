import { useState } from "react"

export function TwiterFollowCard ({ children ,userName, initialIsFolloWing}) { 

    const [isFolloWing, setIsFolloWing] = useState(initialIsFolloWing)

    const text = isFolloWing ? 'siguiendo' : 'seguir'
    const buttonClassName = isFolloWing 
    ? 'follow-card-botton is-following'
    : 'follow-card-botton'

    const handleClick = ()  => {
        setIsFolloWing(!isFolloWing)
    }
    return (
        <article className='follow-card'>
        <header className='follow-card-header'>
                <img
                    className='tw-Follow-avartar' 
                    alt="avatar de midudev"
                    src={`https://unavatar.io/${userName}`}  />
                <div className='follow-card-info'>
                    <strong>{children}</strong>
                    <span className="tw-followCard-UserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-follow-card-text'>{text}</span>
                    <span className="tw-follow-cardstop">dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}

