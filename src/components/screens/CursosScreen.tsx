import { useEffect, useState } from 'react';
import { getCursos } from '../../http/api';
import CursoCard from '../../components/ui/CursoCard';
import styles from './Cursos.module.css'; 

interface Estudiante {
  id: number;
  nombre: string;
  edad: number;
}

interface Curso {
  id: number;
  nombre: string;
  estudiantes: Estudiante[];
}

const Cursos = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);

  useEffect(() => {
    getCursos().then(setCursos);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cursos</h1>
      <div className={styles.grid}>
        {cursos.map((curso) => (
          <CursoCard key={curso.id} curso={curso} />
        ))}
      </div>
    </div>
  );
};

export default Cursos;
