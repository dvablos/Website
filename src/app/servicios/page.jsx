import ServiciosView from "../layout/serviciosLayout/serviciosView";
import Header from "../componentes/Header";

export const metadata = {

    title: "Servicios Digitales Networks | Nuestra Oferta de Soluciones",
    description: "Conoce nuestra amplia gama de servicios tecnologicos: desde consultoría en Telecomunicaciones, TI, Ciberseguridad y desarrollo de paginas web hasta implementaciones tecnológicas a medida para tu empresa.",



};

export default function ServiciosPage() {
    return (
        <>
            <Header />
            <ServiciosView />
        </>
    );
}
