import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SportPage from './components/SportPage';
import { sports } from './data/sportsData';
import CricketAuction from './pages/cricketAuction';

function App() {
  return (
    <Router>
      <div className=" -z-20 min-h-screen bg-gray-50">
        <Header />
        <main style={{
          backgroundImage: `url('/jubileeHall.png')`, // Correct path from public folder
          backgroundAttachment: 'fixed',              // This keeps the background fixed
          backgroundSize: 'cover',                    // Optional: ensures it covers entire section
          backgroundPosition: 'center'                // Optional: centers the image
        }}
          className="py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cricket-auction" element={<CricketAuction />} />
            {Object.values(sports).map(sport => (
              <Route
                key={sport.id}
                path={`/${sport.id}`}
                element={<SportPage sport={sport} />}
              />
            ))}
          </Routes>

        </main>
      </div>
    </Router >
  );
}

export default App;

