import Link from "next/link";
import CartaProductos from "../../componentes/cartaProductos";

export default function Productos() {



    return (
        <section className="bg-white flex flex-col items-center justify-center">
<<<<<<< HEAD
            <h2 className="text-4xl font-bold mb-4 text-center text-black pt-20">Algunos de nuestros <span className="text-[var(--primary)]">productos y soluciones tecnologicas</span></h2>
=======
            <h2 className="text-4xl font-bold mb-4 text-center text-black pt-20">Algunos de nuestros <span className="text-[var(--primary)]">productos</span></h2>
>>>>>>> 23266b174a75bc4f98346cbf5b17f1c51151b20a
            <CartaProductos limit={3} />
            <Link
                href="/productos"
                className="px-8 py-4 bg-[var(--primary)] text-white font-semibold rounded-xl hover:bg-[var(--primary)]/80 transition-all duration-300 hover:-translate-y-1 text-center shadow-sm mb-20"
            >
                Ver todos los productos
            </Link>
        </section>
    );
}