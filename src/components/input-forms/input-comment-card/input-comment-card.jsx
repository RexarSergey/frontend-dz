import React from "react";


export const InputCommentCard = ({value, onChange}) => (
    <form>
        <input
            value={value.author}
            onChange={onChange}
            name="author"
            placeholder={"Author"}
        />
        <input
            value={value.text}
            onChange={onChange}
            name="text"
            placeholder={"Text"}
        />
    </form>
)