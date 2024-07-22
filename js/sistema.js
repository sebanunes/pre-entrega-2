function mostrarAlumnos(alumnos) {
    alumnos.forEach(alumno => {
        console.log(`Nombre: ${alumno.nombre}, Grado: ${alumno.grado}, Notas: ${alumno.notas}`);
    });
}

function buscarAlumno(alumnos) {
    const nombre = prompt("Ingrese el nombre del alumno:");
    const alumno = alumnos.find(alumno => alumno.nombre.toLowerCase() === nombre.toLowerCase());
    if (alumno) {
        console.log(`Nombre: ${alumno.nombre}, Grado: ${alumno.grado}, Notas: ${alumno.notas}`);
    } else {
        console.log(`Alumno no encontrado.`);
    }
}



function calcularPromedio(notas) {

    const promedio = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return promedio / 3;

}

function promedioAlumno(alumnos) {
    const nombre = prompt("Ingrese el nombre del alumno:");
    const alumno = alumnos.find(alumno => alumno.nombre.toLowerCase() === nombre.toLowerCase());

    if (alumno) {
        const promedio = calcularPromedio(alumno.notas);
        console.log(`El promedio del alumno: ${alumno.nombre}, es de: ${promedio.toFixed(2)}`);
    } 
    else {
        console.log(`Alumno no encontrado.`);
    }
}


function agregarAlumno(alumnos) {
    const nombre = prompt("Ingrese el nombre del alumno:");
    const grado = prompt("Ingrese el grado del alumno:");
    const notas = prompt("Ingrese las tres notas del alumno, separadas por comas:")

    
    const nuevoAlumno = { nombre, grado, notas };
    alumnos.push(nuevoAlumno);
    console.log(`Alumno ${nombre} agregado exitosamente.`);
}