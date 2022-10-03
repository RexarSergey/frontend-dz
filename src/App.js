import './App.css';
import {MessageCard} from "./components/message-card/message-card";
import artiData from "./assets/articles.json"


function App() {
    return (
        // Mapping elements form mock-data
        <div className="App">
            {artiData.map(({articleId, title, text, currentLikes, commentsCount}) => <MessageCard
                articleId={articleId}
                title={title}
                text={text}
                currentLikes={currentLikes}
                commentsCount={commentsCount}
            />)}
        </div>
    );
}

export default App;
