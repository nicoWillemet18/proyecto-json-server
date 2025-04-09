import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cursos from './components/screens/CursosScreen';
import EstudiantesScreen from './components/screens/EstudiantesScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cursos />} />
        <Route path="/estudiantes" element={<EstudiantesScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

