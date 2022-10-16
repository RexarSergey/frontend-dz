import React from "react";
import './App.css';
import {AsyncRealization} from "./components/async-cards/async-realization/async-realization"


function App() {
    return (
        // Mapping elements form mock-data
        <div className="App">
      {/*      {artiData.map(({articleId, title, text, currentLikes, commentsCount}) => <MessageCard
                articleId={articleId}
                title={title}
                text={text}
                currentLikes={currentLikes}
                commentsCount={commentsCount}
            />)}*/}
            <AsyncRealization/>
        </div>
    );
}

export default App;
