import React, {useState, useEffect} from 'react'

import getData from '../../assets/articles.json'

export function MyComponent() {
    const [data, setData] = useState(null)

    useEffect(() => {
        getData().then(fetchedData => setData(fetchedData))
    }, [])

    return data
        ? <div> {data} </div>
        : <div> NO DATA </div>
}