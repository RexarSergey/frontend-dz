import React, {useState} from "react";
import {AsyncCommentCard} from "../async-comment-card/async-comment-card";
import s from "./async-message-card.module.css";


export function CommentBlock({commentsCount, commentsCounter, setCommentsCounter, commentsState, setCommentsState}) {
    const commentsInfo = `Current comments: ${commentsCounter}`

    const pushCommentButton = () => {
        if (commentsState) {
            setCommentsState(false)
            return
        }

        setCommentsState(true)
    }

    return (
        <>
            <p className={s.info}>{commentsInfo}</p>
            <div
                className={s.button}
                style={{
                    backgroundColor: commentsState ? '#808080' : '#61dafb'
                }}
                onClick={pushCommentButton}>{commentsState ? "Hide" : "Show"}
            </div>
        </>
    )
}

export function LikeBlock({currentLikes, likeCounter, setLikeCounter, likeState, setLikeState}) {
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
        <>
            <p className={s.info}>{likeInfo}</p>
            <div
                className={s.button}
                style={{
                    backgroundColor: likeState ? '#ff0000' : '#808080',
                    float: "right"
                }}
                onClick={pushLikeButton}>Like
            </div>
        </>
    )
}

export function MessageCard({articleId, title, text, currentLikes, commentsCount}) {
    const [likeCounter, setLikeCounter] = useState(currentLikes)
    const [likeState, setLikeState] = useState(false)

    const [commentsCounter, setCommentsCounter] = useState(commentsCount)
    const [commentsState, setCommentsState] = useState(false)

    return (
        <div className={s.card}>
            <h1>{title}</h1>
            <p className={s.content}>{text}</p>

            <div className={s.container}>
                <CommentBlock
                    commentsCount={commentsCount}
                    commentsCounter={commentsCounter}
                    setCommentsCounter={setCommentsCounter}
                    commentsState={commentsState}
                    setCommentsState={setCommentsState}
                />
                <LikeBlock
                    currentLikes={currentLikes}
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
                {commentsState ? <AsyncCommentCard articleId={articleId} setCommentsCounter={setCommentsCounter}/> : ""}

            </div>
        </div>
    )
}