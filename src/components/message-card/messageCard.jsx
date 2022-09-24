import React, {useState} from "react"
import s from "./messageCard.module.css"


export function MessageCard(props) {
    // Object destructuring
    const {title, text, currentLikes} = props.value

    // useState hook for like counter
    const [counter, setCounter] = useState(currentLikes)
    // useState hook for like button state
    const [state, setState] = useState(false)

    // Customize info about current likes
    const likeInfo = `Current likes: ${counter}`

    // Function, that change number of likes and button state with its color
    const push = () => {
        if (state) {
            setCounter(oldCounter => oldCounter - 1)
            setState(false)
            return
        }

        setCounter(oldCounter => oldCounter + 1)
        setState(true)
    }

    // Card realization
    return (
        <>
            <div className={s.card}>
                <h1>{title}</h1>
                <p className={s.content}>{text}</p>
                <p className={s.likesInfo}>{likeInfo}</p>
                <div className={s.buttonPosition}>
                    <div
                        className={s.button}
                        style={{
                            backgroundColor: state ? 'red' : 'gray'
                        }}
                        onClick={push}>Like
                    </div>
                </div>
            </div>
            <br/>
        </>
    )
}