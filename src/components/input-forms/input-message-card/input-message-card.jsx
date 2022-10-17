import React from "react";


export const InputMessageCard = ({data, onChange}) => (
    <form className="Form">
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