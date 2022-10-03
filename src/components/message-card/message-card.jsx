import React, {useState} from "react"
import {CommentCard} from "../comment-card/comment-card";
import s from "./message-card.module.css"
import commData from "../../assets/comments.json"


export function MessageCard({articleId: Id, title, text, currentLikes, commentsCount}) {
    // useState hook for like counter and comments
    const [likeCounter, setLikeCounter] = useState(currentLikes)
    const [commentsCounter, setCommentsCounter] = useState(commentsCount)

    // useState hook for like and comment button state
    const [likeState, setLikeState] = useState(false)
    const [commentsState, setCommentsState] = useState(false)


    // Customize info about current likes and comments
    const likeInfo = `Current likes: ${likeCounter}`
    const commentsInfo = `Current comments: ${commentsCounter}`


    // Function, that change number of likes and button state with its color
    const pushLikeButton = () => {
        if (likeState) {
            setLikeCounter(oldCounter => oldCounter - 1)
            setLikeState(false)
            return
        }

        setLikeCounter(oldCounter => oldCounter + 1)
        setLikeState(true)
    }


    //
    const pushCommentButton = () => {
        if (commentsState) {
            setCommentsState(false)
            return
        }

        setCommentsState(true)
    }


    // Card realization
    return (
        <div className={s.card}>
            <h1>{title}</h1>
            <p className={s.content}>{text}</p>


            <div className={s.container}>
                <div>
                    <p className={s.info}>{commentsInfo}</p>
                    <div
                        className={s.button}
                        style={{
                            backgroundColor: commentsState ? '#808080' : '#61dafb'
                        }}
                        onClick={pushCommentButton}>{commentsState ? "Hide" : "Show"}
                    </div>
                </div>
                <div>
                    <p className={s.info}>{likeInfo}</p>
                    <div
                        className={s.button}
                        style={{
                            backgroundColor: likeState ? '#ff0000' : '#808080',
                            float: "right"
                        }}
                        onClick={pushLikeButton}>Like
                    </div>
                </div>
            </div>

            <div className="CommentCards"
                 style={{
                     display: commentsState ? "block" : "none"
                 }}
            >
                {commData.map(({author, articleId, text}) => {
                        if (Id === articleId)
                            return (
                                <CommentCard
                                    author={author}
                                    text={text}
                                />
                            )
                    }
                )}
            </div>
        </div>
    )
}