export const getUsuarios = async () => {
    const res = await fetch("http://localhost:3001/usuarios");
    return res.json();
  };