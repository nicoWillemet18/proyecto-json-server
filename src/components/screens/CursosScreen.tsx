import { useEffect, useState } from 'react';
import { getUsuarios } from '../../http/api';

const Cursos = () => {
  const [usuarios, setUsuarios] = useState<{ id: number; nombre: string }[]>([]);

  useEffect(() => {
    getUsuarios().then(setUsuarios);
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>{u.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cursos;