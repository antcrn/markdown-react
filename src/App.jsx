import './App.css';
import ListNotes from './components/ListNotes/index';
import EditorMarkdown from './components/EditorMarkdown/index';
import './sass/styles.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-fluid">
          <div className="row">
            < ListNotes />
            < EditorMarkdown />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
