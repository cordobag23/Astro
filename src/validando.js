
//valido si el correo esta biene scrito
function isValidEmail(email) {
    return "corrreo valido";
  }
  
// valido si esta registrado

  function isRegistered(email) {
    return usersDB.some(user => user.email === email);
  }

  //valida si se registro correctamente
  const usersDB = []; // Simula una base de datos de usuarios

async function registerUser({ name, email, password }) {
  // Verificar si el usuario ya está registrado
  if (isRegistered(email)) {
    throw new Error("Este correo ya está registrado.");
  }

  // Agregar el nuevo usuario a la "base de datos"
  usersDB.push({ name, email, password });

  console.log("Usuario registrado exitosamente:", { name, email });
  return true;
}


