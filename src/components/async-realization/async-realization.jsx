import React, {useEffect, useState} from "react"
import {getArticles} from "../helpers/get-articles"
import {MessageCard} from "../async-message-card/async-message-card";


export function AsyncRealization() {
    const [data, setData] = useState(null)

    useEffect(() => {
        getArticles().then(fetchedData => setData(fetchedData))
    }, [])

    return data
        ? <div> {data.map(({articleId, title, text, currentLikes, commentsCount}) =>
            <MessageCard
                articleId={articleId}
                title={title}
                text={text}
                currentLikes={currentLikes}
                commentsCount={commentsCount}
            />)}
        </div>
        : <div> NO DATA </div>
}