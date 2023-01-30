import './normal.css';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className='chat-log'>
        </div>
      </section>
    </div>
  );
}

export default App;
