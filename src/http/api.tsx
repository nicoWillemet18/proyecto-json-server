export const getCursos = async () => {
  const res = await fetch("http://localhost:3001/cursos");
  return res.json();
};