import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importar la base de los colaboradores
import { BaseColaboradores } from './colaboradores';

//components
import Button from 'react-bootstrap/Button';
import NavSearch from './components/NavSearch';
import Form from 'react-bootstrap/Form';

function App() {

  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState(BaseColaboradores);
  const [nombreColaborador, setNombreColaborador] = useState("");
  const [correoColaborador, setCorreoColaborador] = useState("");

  //Estado para errores
  const [error, setError] = useState(false);

  //Funcion de validacion de datos del formulario:
  const validarDatos = (e) => {
    e.preventDefault()

    //Validación de formularios
    if (nombreColaborador === '' || correoColaborador === '') {
      setError(true);
      return
    }
    // Reset de formularios
    setError(false);
    setNombreColaborador('');
    setCorreoColaborador('');

    // Ejecutar funcion de agregarUsuarios
    agregarUsuario()
  };

  //Funcion para agregar un nuevo colaborador usando los estados del nombre y el correo de los inputs:
  const agregarUsuario = () => {
    const nuevoColaborador = {
      id: 1,
      nombre: nombreColaborador,
      correo: correoColaborador
    }

    //Actualización de los estados:
    setColaboradores([...colaboradores, nuevoColaborador])
    setColaboradoresFiltrados([...colaboradoresFiltrados, nuevoColaborador])
  }

  //Funcion para filtrar colaboradores
  const filtrarColaboradores = (search) => {
    const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
      return (
        colaborador.nombre.includes(search) || colaborador.correo.includes(search)
      )
    })
    setColaboradoresFiltrados([...colaboradoresFiltrados])
  }

  return (
    <div className="App">
      <NavSearch onChange={(e) => filtrarColaboradores(e.target.value)} />

      <Form className="Container" onSubmit={validarDatos}>
        <h4 className="m-2 mt-3">Agrega un colaborador:</h4>
        <Form.Group className="mb-2">
          <Form.Label className='label-stlye'>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Escribe un nombre"
            value={nombreColaborador}
            onChange={(e) => setNombreColaborador(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label className='label-stlye'>Correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="Escribe un correo"
            value={correoColaborador}
            onChange={(e) => setCorreoColaborador(e.target.value)}
          />
        </Form.Group>
        <Button className="text-align: center;"
          variant="primary"
          type="submit"
        >
          Agregar
        </Button>
        {/* Aviso de error de datos */}
        {error ? <p className="error">Todos los campos son obligatorios.</p> : null}
      </Form>

      <hr />

      <div className="Container list-style">
        <h4 className="m-2 ">Listado de colaboradores:</h4>
        {/* Renderización dinámica de lista con los datos de los colaboradores */}
        {colaboradoresFiltrados.map((colaborador) => {
          return (
            <li>
              {colaborador.nombre} - {colaborador.correo}
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default App;
