import React, {useState} from "react"
import {ElementEditable} from "../../helpers/element-editable"
import {AsyncCommentCard} from "../async-comment-card/async-comment-card"
import {CommentSection} from "../sections/comment-section"
import {LikeSection} from "../sections/like-section"
import s from "../styles/message-card-style.module.scss"


export function MessageCard({articleId, date, title, text, currentLikes, commentsCount}) {
    const [commentsCounter, setCommentsCounter] = useState(commentsCount)
    const [commentsState, setCommentsState] = useState(false)

    const [likeCounter, setLikeCounter] = useState(currentLikes)
    const [likeState, setLikeState] = useState(false)

    const [commentsData, setCommentsData] = useState(null)

    const [t, setTitle] = useState(title)
    const [showInputElem, setShowInputElem] = useState(false)

    const dateInfo = `Card created: ${date}`

    return (
        <div className={s.card}>
            <div className={s.date}>{dateInfo}</div>

            <h1>
                <ElementEditable
                    value={t}
                    showInputEle={showInputElem}
                    onChange={(e) => setTitle(e.target.value)}
                    onBlur={() => setShowInputElem(false)}
                    onDoubleClick={() => setShowInputElem(true)}
                />
            </h1>

            <p className={s.content}>{text}</p>

            <div className={s.container}>
                <CommentSection
                    commentsCounter={commentsCounter}
                    commentsState={commentsState}
                    setCommentsState={setCommentsState}
                />
                <LikeSection
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