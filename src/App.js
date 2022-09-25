import './App.css';
import {MessageCard} from "./components/message-card/message-card";
import mockData from "./assets/mock-data"


function App() {
    return (
        // Mapping elements form mock-data
        <div className="App">
            {mockData.map(({title, text, currentLikes}) => <MessageCard
                title={title}
                text={text}
                currentLikes={currentLikes}
            />)}
        </div>
    );
}

export default App;
