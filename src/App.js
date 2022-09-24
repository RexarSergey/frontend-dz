import './App.css';
import {MessageCard} from "./components/message-card/messageCard";
import mockData from "./assets/mock-data"


function App() {
    return (
        // Mapping elements form mock-data
        <div className="App">
            {mockData.map(item => <MessageCard value={item}/>)}
        </div>
    );
}

export default App;
