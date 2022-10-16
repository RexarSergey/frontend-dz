import React, {useEffect, useState} from "react";
import {getComments} from "../../helpers/get-comments-by-article";
import {InputCommentCard} from "../../input-forms/input-comment-card/input-comment-card";
import s from "./async-comment-card.module.css";


const initialValues = {
    author: "",
    articleId: 0,
    text: "",
}

export function CommentCard({author, text}) {
    const authorInfo = `Author: ${author}`;

    return (
        <div className={s.card}>
            <h1>{authorInfo}</h1>
            <p className={s.content}>{text}</p>
        </div>
    )
}

export function AsyncCommentCard({articleId: Id, setCommentsCounter}) {
    const [data, setData] = useState(null)
    const [line, setLine] = useState(initialValues)

    initialValues.articleId = Id

    useEffect(() => {
        getComments(Id).then(fetchedData => setData(fetchedData))
    }, [])

    const onChange = event => {
        const {name, value} = event.target
        setLine({...line, [name]: value})
    }

    const pushLine = () => {
        setData([...data, line])
        setCommentsCounter(oldCounter => oldCounter + 1)
    }

    return data
        ? <div> {data.map(({author, articleId, text}) =>
            <CommentCard
                author={author}
                text={text}
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