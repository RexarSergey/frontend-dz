import React, {useState} from "react";
import {generateUniqueId} from "../../helpers/generate-unique-id";
import {getCurrentDate} from "../../helpers/get-current-date";

const initialValues = {
    articleId: generateUniqueId(),
    date: getCurrentDate(),
    title: {text: "", showInputElem: false},
    text: "",
    currentLikes: 0,
    commentsCount: 0
}

export function InputMessageCard({setData}) {

    const [line, setLine] = useState(initialValues)
    const [messageTitle, setMessageTitle] = useState(initialValues.title.text)
    const [messageText, setMessageText] = useState(initialValues.text)
    // const [messageLikes, setMessageLikes] = useState(initialValues.currentLikes)
    // const [messageComments, setMessageComments] = useState(initialValues.commentsCount)

    const onTitleChange = event => {
        const {value} = event.target
        setMessageTitle(value)
        setLine({...line, title:value})
    }

    const onTextChange = event => {
        const {value} = event.target
        setMessageText(value)
        setLine({...line, text:value})
    }

    // const onLikesChange = event => {
    //     const {value} = event.target
    //     setMessageLikes(value)
    //     setLine({...line, currentLikes:value})
    // }
    //
    // const onCommentsChange = event => {
    //     const {value} = event.target
    //     setMessageComments(value)
    //     setLine({...line, commentsCount:value})
    // }

    const pushLine = () => {
        setData(oldData => [...oldData, line])
    }

    return (
        <>
            <form className="Form">
                <input
                    value={messageTitle}
                    onChange={onTitleChange}
                    placeholder={"Title"}
                />
                <input
                    value={messageText}
                    onChange={onTextChange}
                    placeholder={"Text"}
                />
                {/*<input*/}
                {/*    value={messageLikes}*/}
                {/*    onChange={onLikesChange}*/}
                {/*    placeholder={"Current Likes"}*/}
                {/*/>*/}
                {/*<input*/}
                {/*    value={messageComments}*/}
                {/*    onChange={onCommentsChange}*/}
                {/*    placeholder={"Comments Count"}*/}
                {/*/>*/}
            </form>
            <button onClick={pushLine}>Push</button>
        </>
    )
}