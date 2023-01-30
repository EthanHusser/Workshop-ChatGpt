import './normal.css';
import './App.css';
import { useState } from 'react';
import ChatMessage from './ChatMessage';

const App = () => {

  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let chatLogNew = [...chatLog, {user: "me", message: `${input}`}];
      setInput('');
      setChatLog(chatLogNew)
      const messages = chatLogNew.map((message) => message.message).join("\n");
      const response = await fetch('http://localhost:3080/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: messages
        })
      });
      const data = await response.json();
      setChatLog([...chatLogNew, { user: "gpt" , message: `${data.message}`}]);
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
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
