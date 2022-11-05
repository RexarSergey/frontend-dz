import React, {useState} from "react"
import {AsyncCommentCard} from "../async-comment-card/async-comment-card"
//import s from "./async-message-card.module.css"
import s from "./async-message-card.module.scss"


export function CommentBlock({commentsCounter, commentsState, setCommentsState}) {
    const commentsInfo = `Current comments: ${commentsCounter}`

    const pushCommentButton = () => {
        if (commentsState) {
            setCommentsState(false)
            return
        }

        setCommentsState(true)
    }

    return (
        <div className={s.commentBlock}>
            <p className={s.info}>{commentsInfo}</p>
            <div
                className={s.button}
                style={{
                    backgroundColor: commentsState ? '#808080' : '#61dafb'
                }}
                onClick={pushCommentButton}>{commentsState ? "Hide" : "Show"}
            </div>
        </div>
    )
}

export function LikeBlock({likeCounter, setLikeCounter, likeState, setLikeState}) {
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

export function MessageCard({articleId, title, text, currentLikes, commentsCount}) {
    const [commentsCounter, setCommentsCounter] = useState(commentsCount)
    const [commentsState, setCommentsState] = useState(false)

    const [likeCounter, setLikeCounter] = useState(currentLikes)
    const [likeState, setLikeState] = useState(false)

    const [commentsData, setCommentsData] = useState(null)

    return (
        <div className={s.card}>
            <h1>{title}</h1>
            <p className={s.content}>{text}</p>

            <div className={s.container}>
                <CommentBlock
                    commentsCounter={commentsCounter}
                    commentsState={commentsState}
                    setCommentsState={setCommentsState}
                />
                <LikeBlock
                    likeCounter={likeCounter}
                    setLikeCounter={setLikeCounter}
                    likeState={likeState}
                    setLikeState={setLikeState}
                />
            </div>

            <div
                style={{
                    display: commentsState ? "block" : "none"
                }}
            >
                {commentsState ? <AsyncCommentCard commentsData={commentsData} articleId={articleId}
                                                   setCommentsData={setCommentsData}
                                                   setCommentsCounter={setCommentsCounter}/> : ""}
            </div>
        </div>
    )
}