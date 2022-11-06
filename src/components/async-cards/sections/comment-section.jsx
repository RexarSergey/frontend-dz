import s from "../styles/message-card-style.module.scss"
import React from "react"

export function CommentSection({commentsCounter, commentsState, setCommentsState}) {
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