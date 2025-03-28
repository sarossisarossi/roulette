function Userdata() {
    // Pedir el nombre
    const name = prompt("¿Cuál es tu nombre?");
    
    // Pedir la cantidad de dinero
    const money = prompt("¿Cuánta plata quieres jugar?");
    
    // Verificar si los valores son válidos
    if (name && money && !isNaN(money)) {
      return { name, money: parseFloat(money) };
    } else {
      return { name: name || "Desconocido", money: 0 };
    }
    console.log(name)
    console.log(money)
  }

export default Userdata