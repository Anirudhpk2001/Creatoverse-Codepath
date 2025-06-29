import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import '@picocss/pico';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creators" element={<ShowCreators />} />
        <Route path="/creator/:name" element={<ViewCreator />} />
        <Route path="/add" element={<AddCreator />} />
        <Route path="/edit/:name" element={<EditCreator />} />
      </Routes>
    </Router>
  );
}

export default App;
