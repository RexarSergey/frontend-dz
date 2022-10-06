import React, {useEffect, useState} from "react";
import {getComments} from "../helpers/get-comments-by-article";
import s from "./async-comment-card.module.css";


export function CommentCard({author, articleId, text}) {
    const authorInfo = `Author: ${author}`;

    return (
        <div className={s.card}>
            <h1>{authorInfo}</h1>
            <p className={s.content}>{text}</p>
        </div>
    )
}

export function AsyncCommentCard({articleId: Id}) {
    const [data, setData] = useState(null)

    useEffect(() => {
        getComments(Id).then(fetchedData => setData(fetchedData))
    }, [])

    return data
        ? <div> {data.map(({author, articleId, text}) =>
            <CommentCard
                author={author}
                articleId={articleId}
                text={text}
            />
        )}
        </div>
        : <div>Loading...</div>
}