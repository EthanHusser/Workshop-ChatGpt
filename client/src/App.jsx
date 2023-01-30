import './normal.css';
import './App.css';
import { useState } from 'react';
import ChatMessage from './ChatMessage';

const App = () => {

  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([{user: 'me', message: 'Hello, is me'}, {user: 'gpt', message: 'Hello, I am GPT-3'}]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setChatLog([...chatLog, {user: 'me', message: input}]);
    setInput('');
  }

  const clearChat = () => {
    setChatLog([]);
  }

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button" onClick={clearChat}>
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className='chat-log'>
          {chatLog.map((message, index) => {
            return <ChatMessage key={index} message={message} />
          })}
        </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
          <input rows="1" value={input} onChange={(e) => setInput(e.target.value)} className="chat-input-area" placeholder="Type your question here" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
