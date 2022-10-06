import './App.css';
import {MessageCard} from "./components/message-card/message-card";
import {AsyncRealization} from "./components/async-realization/async-realization"
import artiData from "./assets/articles.json"


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
            {/*<AsyncCard dataSize={artiData.length}/>*/}
            <AsyncRealization/>
        </div>
    );
}

export default App;
