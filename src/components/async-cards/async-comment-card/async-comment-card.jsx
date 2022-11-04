import React, {useEffect, useState} from "react";
import {getComments} from "../../helpers/get-comments-by-article";
import {generateUniqueId} from "../../helpers/generate-unique-id";
import {InputCommentCard} from "../../input-forms/input-comment-card/input-comment-card";
import s from "./async-comment-card.module.css";


const initialValues = {
    commentId: generateUniqueId(),
    author: "",
    articleId: 0,
    text: "",
}

export function CommentCard({deleteComment, author, text}) {
    const authorInfo = `Author: ${author}`;

    return (
        <div className={s.card}>
            <h1>{authorInfo}</h1>
            <p className={s.content}>{text}</p>
            <button onClick={deleteComment}>Delete</button>
        </div>
    )
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

    return commentsData
        ? <div> {commentsData.map(({commentId: Id, author, text}) =>
            <CommentCard
                author={author}
                text={text}
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
        </div>
        : <div>Loading...</div>
}