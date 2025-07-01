import Head from "next/head";
import React from 'react';
import Image from "next/image";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";

export default function index() {
  
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
        <title>Planilla</title>
      </Head>
            <div className='w-full min-h-screen flex flex-col items-center justify-center px-4 py-8'>
        <div className='max-w-sm sm:max-w-xl w-full text-gray-600'>
          <div className='text-center'>
            <Image
            src="/logo-sinfonica.png"
            alt="Logo Orquesta Sinfónica de Carabobo"
            className="mx-auto"
            width={186}
            height={148}
            priority
            />
            <div className='mt-5 space-y-2'>
              <h1 className='text-gray-800 text-2xl font-bold sm:text-3xl'>
                Planilla de Audición
              </h1>
              <h1 className='text-gray-800 text-2xl font-bold sm:text-xl'>
                Orquesta Sinfónica de Carabobo
              </h1>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className='mt-8 space-y-5'>

            {/* --------------------Estudiante-------------------- */}
            <h3 className='text-gray-800 text-2xl font-bold sm:text-xl'>Datos Personales</h3>
            {/* Nombres y Apellidos */}
            <div className='flex flex-col sm:flex-row gap-4 w-full'>
              <div className='flex-1 w-full'>
                <label className='font-medium'>Nombres</label>
                <Input
                  type='text'
                  required
                  className='w-full mt-3 focus:border-blue-600'
                />
              </div>
              <div className='flex-1 w-full'>
                <label className='font-medium'>Apellidos</label>
                <Input
                  type='text'
                  required
                  className='w-full mt-3 focus:border-blue-600'
                />
              </div>
            </div>
            {/* Fecha de Nacimiento y Edad */}
            <div className='flex flex-col sm:flex-row gap-4 w-full'>
              <div className='flex-1 w-full'>
                <label className='font-medium'>Fecha de Nacimiento</label>
                <Input
                  id='fecha-nacimiento'
                  type='date'
                  required
                  max={new Date().toISOString().split('T')[0]}
                  className='w-full mt-3 focus:border-blue-600'
                  onChange={e => {
                    const fecha = e.target.value;
                    const edadInput = document.getElementById('edad-estudiante');
                    if (fecha) {
                      const hoy = new Date();
                      const nacimiento = new Date(fecha);
                      let edad = hoy.getFullYear() - nacimiento.getFullYear();
                      const m = hoy.getMonth() - nacimiento.getMonth();
                      console.log("hoy:", hoy.getDate(), "nacimiento:", nacimiento.getDate());
                      const d = hoy.getDay() - nacimiento.getDay();
                      if (m < 0 || (m === 0 && hoy.getDate() < (nacimiento.getDate() + 1))) {
                        edad--;
                      }
                      edadInput.value = edad >= 0 ? edad : '';
                    } else {
                      edadInput.value = '';
                    }
                  }}
                />
              </div>
              <div className='flex-1 w-full'>
                <label className='font-medium'>Edad</label>
                <Input
                  id='edad-estudiante'
                  type='text'
                  required
                  readOnly
                  className='w-full mt-3 focus:border-blue-600 bg-gray-100'
                  tabIndex={-1}
                />
              </div>
            </div>


            {/* Teléfono Celular */}
            <div className='flex flex-col sm:flex-row gap-4 w-full'>
              <div className='flex-1 w-full'>
                <label className='font-medium'>Teléfono Celular</label>
                <Input
                  type='tel'
                  required
                  className='w-full mt-3 focus:border-blue-600'
                />
              </div>
            </div>

            {/* Cedula */}
            <div className='flex flex-col sm:flex-row gap-4 w-full'>
              <div className='flex-1 w-full'>
                <label className='font-medium'>Numero de Cedula</label>
                <Input
                  type='tel'
                  required
                  className='w-full mt-3 focus:border-blue-600'
                />
              </div>
            </div>
            {/* Correo */}
            <div className='flex flex-col sm:flex-row gap-4 w-full'>
              <div className='flex-1 w-full'>
                <label className='font-medium'>Correo Electrónico</label>
                <Input
                  type='email'
                  required
                  className='w-full mt-3 focus:border-blue-600'
                />
              </div>
            </div>
            {/* Instrumentos*/}
            {(() => {
              // React state hooks para los campos dinámicos
              const [instrumentos, setInstrumentos] = React.useState([{ id: 1 }]);
              return (
                <>
                  {/* Instrumentos */}
                  {instrumentos.map((item, idx) => (
                    <div className='flex flex-col sm:flex-row gap-4 w-full items-end' key={item.id}>
                      <div className='flex-1 w-full'>
                        <label className='font-medium'>{idx === 0 && "Instrumento"}</label>
                        <div className="flex gap-2 mt-3">
                          <Select
                            required
                            className='w-full border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-lg'
                            name={`instrumento-${item.id}`}
                          >
                            <option value=''>Seleccione una opción</option>
                            <option value='Violín'>Violín</option>
                            <option value='Viola'>Viola</option>
                            <option value='Cello'>Cello</option>
                            <option value='Bajo'>Bajo</option>
                            <option value='Trompeta'>Trompeta</option>
                            <option value='Piano'>Piano</option>
                          </Select>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              );
            })()}
            {/* Cargo */}
            <div className='flex flex-col sm:flex-row gap-4 w-full'>
              <div className='flex-1 w-full'>
                <label className='font-medium'>Cargo a Audicionar</label>
                <Input
                  type='tel'
                  required
                  className='w-full mt-3 focus:border-blue-600'
                />
              </div>
            </div>
            {/* Reseña */}
            <div className='flex flex-col sm:flex-row gap-4 w-full'>
              <div className='flex-1 w-full'>
                <label className='font-medium'>Breve Reseña artística</label>
                <textarea className="w-full rounded-md border border-gray-300 shadow-md mt-3 focus:border-blue-600"></textarea>
              </div>
            </div>
            {/* Piezas */}
            <div className='flex flex-col sm:flex-row gap-4 w-full'>
              <div className='flex-1 w-full'>
                <label className='font-medium'>Piezas a Interpretar</label>
                <textarea className="w-full rounded-md border border-gray-300 shadow-md mt-3 focus:border-blue-600"></textarea>
              </div>
            </div>
            <button 
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-500 ring-offset-2 ring-blue-600 focus:ring shadow rounded-lg py-2 px-4"
            >
            Inscribir
          </button>
     
          </form>
        </div>
      </div>
    </>
  );
}
