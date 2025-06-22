import { useState } from "react";
import Head from "next/head";
import Brand from "../components/ui/Brand";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";

export default function Index() {
  const [searchName, setSearchName] = useState("");
  const [searchCedula, setSearchCedula] = useState("");

  const data = [
    { nombre: "Juan Pérez", edad: 15, cedula: "V-12345678", sexo: "Masculino", instrumento: "Violín", teorica: "Solfeo" },
    { nombre: "María Gómez", edad: 14, cedula: "V-87654321", sexo: "Femenino", instrumento: "Piano", teorica: "Armonía" },
    { nombre: "Nelson Guerrero", edad: 18, cedula: "V-32067861", sexo: "Masculino", instrumento: "Violín", teorica: "Historia" },
    { nombre: "Carlos Rodríguez", edad: 16, cedula: "V-11223344", sexo: "Masculino", instrumento: "Guitarra", teorica: "Contrapunto" },
    { nombre: "Ana Fernández", edad: 15, cedula: "V-99887766", sexo: "Femenino", instrumento: "Flauta", teorica: "Solfeo" },
    { nombre: "Luis Martínez", edad: 17, cedula: "V-33445566", sexo: "Masculino", instrumento: "Saxofón", teorica: "Armonía" },
    { nombre: "Sofía López", edad: 14, cedula: "V-55667788", sexo: "Femenino", instrumento: "Clarinete", teorica: "Contrapunto" },
    { nombre: "Pedro Ramírez", edad: 16, cedula: "V-77889900", sexo: "Masculino", instrumento: "Trompeta", teorica: "Solfeo" },
    { nombre: "Lucía Herrera", edad: 15, cedula: "V-44556677", sexo: "Femenino", instrumento: "Oboe", teorica: "Armonía" },
    { nombre: "Jorge Castro", edad: 17, cedula: "V-66778899", sexo: "Masculino", instrumento: "Batería", teorica: "Contrapunto" },
    { nombre: "Valeria Ruiz", edad: 14, cedula: "V-22334455", sexo: "Femenino", instrumento: "Cello", teorica: "Solfeo" },
  ];

  const filteredData = data.filter(
    (item) =>
      item.nombre.toLowerCase().includes(searchName.toLowerCase()) &&
      item.cedula.toLowerCase().includes(searchCedula.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Planilla</title>
      </Head>
      <Navbar />
      <div className="w-full flex flex-col items-center px-4 py-8">
        <Brand className="mx-auto" />
        <h1 className="text-gray-800 text-3xl font-bold py-5">Solicitudes Recibidas</h1>

        <div className="mt-6 flex gap-4">
          <input
            type="text"
            placeholder="Buscar por nombre"
            className="border px-3 py-2 rounded"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Buscar por cédula"
            className="border px-3 py-2 rounded"
            value={searchCedula}
            onChange={(e) => setSearchCedula(e.target.value)}
          />
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-2 border-b">Nombre</th>
                <th className="px-4 py-2 border-b">Edad</th>
                <th className="px-4 py-2 border-b">Cédula</th>
                <th className="px-4 py-2 border-b">Sexo</th>
                <th className="px-4 py-2 border-b">Instrumento</th>
                <th className="px-4 py-2 border-b">Teórica</th>
                <th className="px-4 py-2 border-b">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-b">{item.nombre}</td>
                  <td className="px-4 py-2 border-b">{item.edad}</td>
                  <td className="px-4 py-2 border-b">{item.cedula}</td>
                  <td className="px-4 py-2 border-b">{item.sexo}</td>
                  <td className="px-4 py-2 border-b">{item.instrumento}</td>
                  <td className="px-4 py-2 border-b">{item.teorica}</td>
                  <td className="px-4 py-2 border-b flex gap-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">Aceptar</button>
                    <button className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded">Revisar</button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Rechazar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}