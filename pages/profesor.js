import Head from "next/head";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
import Link from "next/link";

// Datos del profesor
const profesor = {
  foto: "/persona.jpg",
  nombre: "Prof. Juan Pérez",
  cedula: "12345678",
  telefono: "04121234567",
  email: "juan.perez@email.com",
  catedras: [
    {
      nombre: "Violín I",
      inscritos: 18,
      id: "violin1",
    },
    {
      nombre: "Historia de la Música",
      inscritos: 25,
      id: "historia",
    },
    {
      nombre: "Coro",
      inscritos: 30,
      id: "coro",
    },
  ],
};

export default function Profesor() {
  return (
    <>
      <Head>
        <title>Información del Profesor</title>
      </Head>
      <Navbar />
      <div className="w-full flex flex-col items-center px-4 py-8">

        {/* Información Personal */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Información Personal</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-5xl mb-8">
            <img
              src={profesor.foto}
              alt={profesor.nombre}
              className="w-36 h-36 rounded-full object-cover border"
            />
            <div className="flex-1 flex flex-col md:flex-row gap-8 w-full">
              {/* Columna 1 */}
              <div className="flex-1 mb-4 md:mb-0">
                <div className="text-gray-600 mb-1"><b>Nombre:</b> {profesor.nombre}</div>
                <div className="text-gray-600 mb-1"><b>Cédula:</b> {profesor.cedula}</div>
                <div className="text-gray-600 mb-1"><b>Teléfono:</b> {profesor.telefono}</div>
                <div className="text-gray-600"><b>Email:</b> {profesor.email}</div>
              </div>
              {/* Columna 2 */}
              <div className="flex-1 mb-4 md:mb-0">
                <div className="text-gray-600 mb-1"><b>Cátedras:</b></div>
                <ul className="list-disc list-inside text-gray-700">
                  {profesor.catedras.map((cat) => (
                    <li key={cat.id}>{cat.nombre}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Información de Cátedras */}
        {profesor.catedras.map((cat) => (
          <div key={cat.id} className="bg-white shadow rounded-lg p-6 w-full max-w-3xl mb-8 flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{cat.nombre}</h3>
              <div className="text-gray-600 mb-2"><b>Inscritos:</b> {cat.inscritos}</div>
            </div>
            <Link href={`/inscritos`}>
              <button className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Ver detalles
              </button>
            </Link>
          </div>
        ))}

      </div>
      <Footer />
    </>
  );
}
