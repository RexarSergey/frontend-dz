import s from "../styles/message-card-style.module.scss"
import React from "react"

export function LikeSection({likeCounter, setLikeCounter, likeState, setLikeState}) {
    const likeInfo = `Current likes: ${likeCounter}`

    const pushLikeButton = () => {
        if (likeState) {
            setLikeCounter(oldCounter => oldCounter - 1)
            setLikeState(false)
            return
        }

        setLikeCounter(oldCounter => oldCounter + 1)
        setLikeState(true)
    }

    return (
        <div className={s.likeBlock}>
            <p className={s.info}>{likeInfo}</p>
            <div
                className={s.button}
                style={{
                    backgroundColor: likeState ? '#ff0000' : '#808080',
                }}
                onClick={pushLikeButton}>Like
            </div>
        </div>
    )
}