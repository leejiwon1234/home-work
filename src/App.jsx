import './App.css';
import ProfileCard from './components/ProfileCard';
import profileImg from './assets/images/zi-a.png';

function App() {
  return (
    <div className="main-container">
      <h1 className="title">이지원의 리액트 ✨</h1>

      <ProfileCard
        image={profileImg}
        name="이지원"
        description="개발자입니다."
      />

      <div className="link-area">
        <a
          className="link-button"
          href="https://coffee-one-lime.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ☕ COFFEE
        </a>
     
      </div>
    </div>
  );
}

export default App;
