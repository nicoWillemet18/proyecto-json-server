import { Link } from 'react-router-dom';
import styles from './CursoCard.module.css';

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

const CursoCard = ({ curso }: { curso: Curso }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{curso.nombre}</h3>
      <p className={styles.count}>Alumnos: {curso.estudiantes.length}</p>
      <Link to={`/estudiantes?curso=${curso.id}`} className={styles.link}>
        Ver estudiantes
      </Link>
    </div>
  );
};

export default CursoCard;
