import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

export default function AdminPage() {
  return (
    <>
      <Head>
        <title>Panel de Administrador</title>
      </Head>
      <Navbar />
      <div className="w-full flex flex-col items-center px-4 py-12 min-h-screen bg-gray-50">
        <div className="bg-white shadow rounded-lg p-8 w-full max-w-2xl flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Panel de Administrador
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg shadow transition"
                    onClick={() => window.location.href = '/lista'}>
              Nuevos Ingresos
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg shadow transition">
              Funcionalidad 2
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg shadow transition">
              Funcionalidad 3
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg shadow transition">
              Funcionalidad 4
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg shadow transition">
              Funcionalidad 5
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg shadow transition">
              Funcionalidad 6
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg shadow transition">
              Funcionalidad 7
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg shadow transition">
              Funcionalidad 8
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
