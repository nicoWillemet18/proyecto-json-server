import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getCursos } from '../../http/api';
import EstudiantesCard from '../../components/ui/EstudiantesCard';
import styles from './Estudiantes.module.css';

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

const Estudiantes = () => {
  const [searchParams] = useSearchParams();
  const [curso, setCurso] = useState<Curso | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const idCursoParam = searchParams.get('curso');

    if (!idCursoParam || isNaN(parseInt(idCursoParam))) {
      setError('Parámetro "curso" inválido o no proporcionado.');
      return;
    }

    const idCurso = parseInt(idCursoParam);

    getCursos()
      .then((cursos: Curso[]) => {
        const cursoEncontrado = cursos.find((c) => Number(c.id) === idCurso);

        if (!cursoEncontrado) {
          setError('Curso no encontrado.');
        } else {
          setCurso(cursoEncontrado);
          setError('');
        }
      })
      .catch(() => {
        setError('Error al cargar los cursos.');
      });
  }, [searchParams]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Estudiantes</h1>
      {error && <p className={styles.error}>{error}</p>}
      {curso && (
        <div className={styles.cursoContainer}>
          <h3 className={styles.cursoNombre}>{curso.nombre}</h3>
          <div className={styles.grid}>
            {curso.estudiantes.map((est) => (
              <EstudiantesCard key={est.id} estudiante={est} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Estudiantes;
