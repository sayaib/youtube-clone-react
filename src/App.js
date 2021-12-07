import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import RecommendVideos from './RecommendVideos';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="page_body">
        <SideBar />
        <RecommendVideos />
      </div>
    </div>
  );
}

export default App;
