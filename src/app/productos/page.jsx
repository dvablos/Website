'use client';

import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import CartaProductos from "../componentes/cartaProductos";
import Marcas from "../componentes/marcas";


export default function Productos() {
    return (
        <div className="bg-white w-full min-h-screen bg-gray-50/30 mt-20">
            <Header />

            <main>
                <Marcas />
                <div className="container mx-auto px-6">
                    {/* Header Section */}
                    <div className="text-center max-w-3xl mx-auto mb-16 mt-32 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-dm-serif-text">
                            Nuestros <span className="text-[var(--primary)]">Productos</span>
                        </h1>
                        <p className="text-lg text-gray-600">
                            Ofrecemos soluciones en redes de telecomunicaciones, soluciones Cloud,
                            Servidores y servicios de Infraestructura y ciberseguridad.
                            Somos distribuidores especialistas de las mejores marcas del mercado de las tecnologías como: Cisco, Huawei, Fortinet, Alcatel, Mikrotik, TPLink, etc.
                        </p>
                    </div>

                    {/* Products Grid */}
                    <CartaProductos />
                    <Marcas />
                </div>
            </main>

            <Footer />
        </div>
    )
}
