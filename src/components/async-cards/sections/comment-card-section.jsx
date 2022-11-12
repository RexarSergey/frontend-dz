import React, {useState} from "react"
import {LikeSection} from "./like-section"
import s from "../styles/comment-card-style.module.scss"


export function CommentCardSection({deleteComment, date, author, text, currentLikes}) {
    const [likeCounter, setLikeCounter] = useState(currentLikes)
    const [likeState, setLikeState] = useState(false)


    const authorInfo = `Author: ${author}`
    const dateInfo = `Comment added: ${date}`

    return (
        <div className={s.card}>
            <div className={s.date}>{dateInfo}</div>
            <h1>{authorInfo}</h1>
            <p className={s.content}>{text}</p>
            <LikeSection
                likeCounter={likeCounter}
                setLikeCounter={setLikeCounter}
                likeState={likeState}
                setLikeState={setLikeState}
            />
            <button onClick={deleteComment}>Delete</button>
        </div>
    )
}