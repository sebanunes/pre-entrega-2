

let menu =
    `
        Presione 1 para conocer todos los alumnos
        Presione 2 si quiere buscar solo 1 alumnos
        Presione 3 para agregar alumno
        presione 4 para calcular un promedio
        Presione 5 Para salir
      `

let salir = false
    while (!salir) {
        let opcion = parseInt(prompt(menu));
        switch (opcion) {

            case 1:
                mostrarAlumnos(alumnos);
                break
            case 2:
                buscarAlumno(alumnos);
                break
            case 3:
                agregarAlumno(alumnos);
                break
            case 4:
                promedioAlumno(alumnos);
                break
            case 5:
                alert("Gracias! Pulse f5 para volver a interactuar");
                salir = true
                break
            default:
                alert("Haga algo por favor");
        }
    }
     