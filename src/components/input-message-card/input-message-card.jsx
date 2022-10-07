import React from "react";
import s from "./input-message-card.module.css"

export const InputMessageCard = ({data, onChange}) => (
    <form>
        <input
            value={data.articleId}
            onChange={onChange}
            name="articleId"
            placeholder={"Article Id"}
        />
        <input
            value={data.title}
            onChange={onChange}
            name="title"
            placeholder={"Title"}
        />
        <input
            value={data.text}
            onChange={onChange}
            name="text"
            placeholder={"Text"}
        />
        <input
            value={data.currentLikes}
            onChange={onChange}
            name="currentLikes"
            placeholder={"Current Likes"}
        />
        <input
            value={data.commentsCount}
            onChange={onChange}
            name="commentsCount"
            placeholder={"Comments Count"}
        />
    </form>
)