import React, {useEffect, useState} from "react"
import {CommentCardSection} from "../sections/comment-card-section"
import {getComments} from "../../helpers/get-comments-by-article"
import {generateUniqueId} from "../../helpers/generate-unique-id"
import {InputCommentCard} from "../../input-forms/input-comment-card/input-comment-card"
import {getCurrentDate} from "../../helpers/get-current-date"


const initialValues = {
    commentId: generateUniqueId(),
    date: getCurrentDate(),
    author: "",
    articleId: 0,
    text: "",
    currentLikes: 0
}

export function AsyncCommentCard({commentsData, articleId, setCommentsData, setCommentsCounter}) {
    initialValues.articleId = articleId
    const [line, setLine] = useState(initialValues)

    useEffect(() => {
        if (!commentsData) {
            getComments(articleId).then(fetchedData => setCommentsData(fetchedData))
        }
    }, [])

    const onChange = event => {
        const {name, value} = event.target
        setLine(oldLine => ({...oldLine, [name]: value}))
    }

    const pushLine = () => {

        setLine(oldLine => ({...oldLine, [("commentId")]: generateUniqueId(commentsData)}))

        setCommentsData(oldData => [...oldData, line])
        setCommentsCounter(oldCounter => oldCounter + 1)
    }

    const likeSort = () => {
        setCommentsData([...commentsData].sort(function (a, b) {
                return a.currentLikes - b.currentLikes
            })
        )
    }

    const dateSort = () => {
        setCommentsData([...commentsData].sort(function (a, b) {
                return new Date(a.date) - new Date(b.date)
            })
        )
    }

    return commentsData
        ? <div> {commentsData.map(({commentId: Id, date, author, text, currentLikes}) =>
            <CommentCardSection
                key={Id}

                date={date}
                author={author}
                text={text}
                currentLikes={currentLikes}
                deleteComment={() => {
                    setCommentsData(commentsData.filter(item => item.commentId !== Id))
                    setCommentsCounter(oldCounter => oldCounter - 1)
                }}
            />
        )}
            <InputCommentCard
                value={line}
                onChange={onChange}
            />
            <button onClick={pushLine}>Push</button>
            <div>
                <button onClick={likeSort}>Sort by Likes</button>
                <button onClick={dateSort}>Sort by Date</button>
            </div>
        </div>
        : <div>Loading...</div>
}