import { useState } from "react";
import Head from "next/head";
import Brand from "../components/ui/Brand";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";

export default function MateriaInfo() {
  // Información de la materia
  const materia = {
    nombre: "Historia de la Música",
    id: "HIST-01",
    profesor: "Prof. Juan Pérez",
    cantidadEstudiantes: 5,
  };

  // Lista de estudiantes
  const estudiantes = [
    { nombre: "Juan Pérez", edad: 15, cedula: "V-12345678" },
    { nombre: "María Gómez", edad: 14, cedula: "V-87654321" },
    { nombre: "Nelson Guerrero", edad: 18, cedula: "V-32067861" },
    { nombre: "Ana Fernández", edad: 15, cedula: "V-99887766" },
    { nombre: "Luis Martínez", edad: 17, cedula: "V-33445566" },
  ];

  // Estado para evaluaciones y notas
  const [evaluaciones, setEvaluaciones] = useState([
    { nombre: "Evaluación 1", porcentaje: 25 },
    { nombre: "Evaluación 2", porcentaje: 25 },
    { nombre: "Evaluación 3", porcentaje: 25 },
    { nombre: "Evaluación 4", porcentaje: 25 },
  ]);
  const [notas, setNotas] = useState(
    estudiantes.map(() => evaluaciones.map(() => ""))
  );
  const [editMode, setEditMode] = useState(false);
  const [mensaje, setMensaje] = useState("");

  // Añadir columna de evaluación
  const handleAddEvaluacion = () => {
    setEvaluaciones([
      ...evaluaciones,
      { nombre: `Evaluación ${evaluaciones.length + 1}`, porcentaje: 0 },
    ]);
    setNotas((prevNotas) =>
      prevNotas.map((fila) => [...fila, ""])
    );
  };

  // Cambiar porcentaje de evaluación
  const handlePorcentajeChange = (idx, value) => {
    const newEvaluaciones = [...evaluaciones];
    newEvaluaciones[idx].porcentaje = value;
    setEvaluaciones(newEvaluaciones);
  };

  // Cambiar nota de estudiante
  const handleNotaChange = (estIdx, evalIdx, value) => {
    const newNotas = notas.map((fila, i) =>
      fila.map((nota, j) =>
        i === estIdx && j === evalIdx ? value : nota
      )
    );
    setNotas(newNotas);
  };

  // Cambiar modo de edición
  const handleEditNotas = () => {
    setEditMode(true);
    setMensaje("");
  };

  const handleCargarNotas = () => {
    setEditMode(false);
    setMensaje("Notas cargadas correctamente");
  };

  // Eliminar la última columna de evaluación
  const handleRemoveEvaluacion = () => {
    if (evaluaciones.length > 0) {
      setEvaluaciones(evaluaciones.slice(0, -1));
      setNotas((prevNotas) =>
        prevNotas.map((fila) => fila.slice(0, -1))
      );
    }
  };

  return (
    <>
      <Head>
        <title>Información de la Materia</title>
      </Head>
      <Navbar />
      <div className="w-full flex flex-col items-center px-4 py-8">
        <Brand className="mx-auto" />
        <h1 className="text-gray-800 text-3xl font-bold py-5">Información de la Materia</h1>
        <div className="bg-white rounded shadow p-6 w-full max-w-2xl mb-8">
          <p><span className="font-semibold">Nombre:</span> {materia.nombre}</p>
          <p><span className="font-semibold">ID:</span> {materia.id}</p>
          <p><span className="font-semibold">Profesor:</span> {materia.profesor}</p>
          <p><span className="font-semibold">Cantidad de estudiantes:</span> {materia.cantidadEstudiantes}</p>
        </div>

        <h2 className="text-3xl font-semibold mb-2">Estudiantes inscritos</h2>
        <div className="overflow-x-auto w-full max-w-2xl mb-8">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-2 border-b">Nombre</th>
                <th className="px-4 py-2 border-b">Edad</th>
                <th className="px-4 py-2 border-b">Cédula</th>
              </tr>
            </thead>
            <tbody>
              {estudiantes.map((est, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-2 border-b text-center">{est.nombre}</td>
                  <td className="px-4 py-2 border-b text-center">{est.edad}</td>
                  <td className="px-4 py-2 border-b text-center">{est.cedula}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-semibold my-10">Notas</h2>
        <div className="w-full max-w-4xl flex justify-end mb-2">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mx-5 rounded"
            onClick={handleAddEvaluacion}
            disabled={!editMode}
          >
            Añadir Evaluación
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={handleRemoveEvaluacion}
            disabled={!editMode}
          >
            Eliminar Evaluación
          </button>
        </div>
        <div className="overflow-x-auto w-full max-w-4xl mb-4">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Estudiante</th>
                {evaluaciones.map((evaluacion, idx) => (
                  <th key={idx} className="px-4 py-2 border-b ">
                    <div className="flex flex-col items-center">
                      <span>{evaluacion.nombre}</span>
                      <input
                        type="number"
                        min={0}
                        max={100}
                        value={evaluacion.porcentaje}
                        onChange={(e) =>
                          handlePorcentajeChange(idx, Number(e.target.value))
                        }
                        className="w-16 text-center border rounded mt-1"
                        disabled={!editMode}
                      />
                      <span className="text-xs text-gray-500">%</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {estudiantes.map((est, estIdx) => (
                <tr key={estIdx}>
                  <td className="px-4 py-2 border-b text-center">{est.nombre}</td>
                  {evaluaciones.map((_, evalIdx) => (
                    <td key={evalIdx} className="px-4 py-2 border-b text-center">
                      <input
                        type="number"
                        min={0}
                        max={20}
                        value={notas[estIdx][evalIdx]}
                        onChange={(e) =>
                          handleNotaChange(estIdx, evalIdx, e.target.value)
                        }
                        className="w-16 text-center border rounded"
                        disabled={!editMode}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex gap-4 mb-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            onClick={handleEditNotas}
            disabled={editMode}
          >
            Añadir Notas
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleCargarNotas}
            disabled={!editMode}
          >
            Cargar notas
          </button>
        </div>
        {mensaje && (
          <div className="text-green-600 font-semibold mb-4">{mensaje}</div>
        )}
      </div>
      <Footer />
    </>
  );
}