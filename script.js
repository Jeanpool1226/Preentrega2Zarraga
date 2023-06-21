let envios = [
    { id: 1, categoria: "expres", tipo: "sobres", salida: "todosLosDias", costo: "500" },
    { id: 2, categoria: "expres", tipo: "cajas", salida: "todosLosDias", costo: "700" },
    { id: 3, categoria: "expres", tipo: "paquetes", salida: "todosLosDias", costo: "1000" },
    { id: 4, categoria: "aereo", tipo: "bultos", salida: "SoloViernes", costo: "1500" },
    { id: 5, categoria: "transporte", tipo: "Bultos", salida: "MiercolesYViernes", costo: "1300" }
  ];
  
  let TuEncomienda = [];
  let total = 0;
  let mensaje = "Tu Encomienda\n Bienvenido :\n1 - Tipos de Envío\n2 - Seleccionar Envío\n3 - Total de su envío\n4 - Status de envios\n0 - Salir";
  
  do {
    opcion = Number(prompt(mensaje));
    if (opcion === 1) {
      function listarEnvios(arrayAListar) {
        let listado = "";
        for (let i = 0; i < arrayAListar.length; i++) {
          const envio = arrayAListar[i];
          listado += "id: " + envio.id + "\n";
          listado += "Categoría: " + envio.categoria + "\n";
          listado += "Tipo: " + envio.tipo + "\n";
          listado += "Salida: " + envio.salida + "\n";
          listado += "Costo: $" + envio.costo + "\n\n";
        }
        return listado;
      }
      alert(listarEnvios(envios));
  
    } else if (opcion === 2) {
      function seleccionarEnvio(id) {
        const envioSeleccionado = envios.find(envio => envio.id === id);
        return envioSeleccionado;
      }
      const idSeleccionado = Number(prompt("Seleccione el id del envío"));
      const envioSeleccionado = seleccionarEnvio(idSeleccionado);
      if (envioSeleccionado) {
        alert("Envío seleccionado:\n\n" +
          "id: " + envioSeleccionado.id + "\n" +
          "Tipo: " + envioSeleccionado.tipo + "\n" )
        TuEncomienda.push(envioSeleccionado);
        total += Number(envioSeleccionado.costo);
      } else {
        alert("No se encontró ningún envío con el ID seleccionado");
      }
  
    } else if (opcion === 3) {
        alert("Total de su envío: $" + total);  
    } else if (opcion === 4) {
        alert("Ya estan Preparando sus Envios  ");
  
    } else if (opcion === 0) {
        alert("Gracias Por Preferirnos");
  
    } else {
      validarEnvio(opcion);
    }
  } while (opcion !== 0);
  
  function validarEnvio(opcion) {
    if (opcion > 5) {
      return "Debe elegir una opción válida";
    }
  }
  
  