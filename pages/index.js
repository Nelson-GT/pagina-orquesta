import Head from "next/head";
import Reseña from "../components/ui/Reseña";
import Programas from "../components/ui/Programas";
import Audiciones from "../components/ui/Audiciones";
import Titulo from "../components/ui/titulo";
import Alianza from "../components/ui/Alianzas";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <Navbar />
      <Titulo />  {/* sinfonica de carabobo */} 
      <Alianza /> {/* Alianzas */}
      <Reseña /> {/* reseña histórica */} 
      <Programas /> {/* Forma parte de nuestros programas */}
      <Audiciones/>
      <Footer />
    </>
  );
}
