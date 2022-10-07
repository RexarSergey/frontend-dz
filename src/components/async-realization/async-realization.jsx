import React, {useEffect, useState} from "react"
import {getArticles} from "../helpers/get-articles"
import {MessageCard} from "../async-message-card/async-message-card";
import {InputMessageCard} from "../input-message-card/input-message-card"


const initialValues = {
    articleId: 100,
    title: "",
    text: "",
    currentLikes: 0,
    commentsCount: 0
}

export function AsyncRealization() {
    const [data, setData] = useState(null)
    const [line, setLine] = useState(initialValues)

    useEffect(() => {
        getArticles().then(fetchedData => setData(fetchedData))
    }, [])

    const onChange = event => {
        const {name, value} = event.target
        setLine({...line, [name]: value})
    }

    const pushLine = () => {
        setData([...data, line])
    }

    return data
        ? <div> {data.map(({articleId, title, text, currentLikes, commentsCount}) =>
            <MessageCard
                articleId={articleId}
                title={title}
                text={text}
                currentLikes={currentLikes}
                commentsCount={commentsCount}
            />)}
            <InputMessageCard
                data={line}
                onChange={onChange}
            />
            <button onClick={pushLine}>Push</button>
        </div>
        : <div> NO DATA </div>
}