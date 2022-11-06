import React, {useEffect, useState} from "react"
import {getArticles} from "../../helpers/get-articles"
import {MessageCard} from "../async-message-card/async-message-card"
import {InputMessageCard} from "../../input-forms/input-message-card/input-message-card"


export function AsyncRealization() {
    const [data, setData] = useState(null)

    useEffect(() => {
        getArticles().then(fetchedData => setData(fetchedData))
    }, [])

    const likeSort = () => {
        setData([...data].sort(function (a, b) {
                return a.currentLikes - b.currentLikes
            })
        )
    }

    const dateSort = () => {
        setData([...data].sort(function (a, b) {
                return new Date(a.date) - new Date(b.date)
            })
        )
    }


    return data
        ? <div> {
            data.map(({articleId, date, title, text, currentLikes, commentsCount}) =>
                <MessageCard
                    key={articleId}

                    articleId={articleId}
                    date={date}
                    title={title}
                    text={text}
                    currentLikes={currentLikes}
                    commentsCount={commentsCount}
                />
            )}


            <InputMessageCard
                setData={setData}
            />
            <div>
                <button onClick={likeSort}>Sort by Likes</button>
                <button onClick={dateSort}>Sort by Date</button>
            </div>
        </div>
        : <div> Loading DATA... </div>
}