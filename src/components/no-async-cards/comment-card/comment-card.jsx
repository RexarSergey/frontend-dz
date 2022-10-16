import React from "react";
import s from "./comment-card.module.css"

export function CommentCard({author, text}) {
    const authorInfo = `Author: ${author}`;

    return (
        <div className={s.card}>
            <h1>{authorInfo}</h1>
            <p className={s.content}>{text}</p>
        </div>
    )
}