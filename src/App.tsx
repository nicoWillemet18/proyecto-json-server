import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cursos from './components/screens/CursosScreen';
import Estudiantes from './components/screens/EstudiantesScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cursos />} />
        <Route path="/estudiantes" element={<Estudiantes />} />
      </Routes>
    </Router>
  );
}

export default App;

