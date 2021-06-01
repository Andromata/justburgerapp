import '../../Styles/Containers/App.css';
import Landing from './Landing';
import Navbar from '../Component/Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="main-container">
      <div className="body-container">
      <Navbar />
      <Landing />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
