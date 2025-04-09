import styles from './EstudiantesCard.module.css';

interface Estudiante {
  id: number;
  nombre: string;
  edad: number;
}

const EstudiantesCard = ({ estudiante }: { estudiante: Estudiante }) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.name}>{estudiante.nombre}</h4>
      <p className={styles.age}>Edad: {estudiante.edad}</p>
    </div>
  );
};

export default EstudiantesCard;
