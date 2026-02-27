import Link from "next/link";
import CartaBlog from "../../componentes/cartaBlog";


export default function BlogView() {
    return (
        <section className="w-full max-w-6xl mx-auto px-4 mt-20 bg-white">
            <h1 className="text-4xl text-center mt-20 text-black text-center mb-10"><span className="bg-[var(--primary)] text-white px-2 rounded">Sigue nuestros blogs</span></h1>
<<<<<<< HEAD
            <p className="text-center text-gray-600 font-bold text-2xl mb-10">Aquí encontrarás información sobre nuevas tecnologías, consejos de seguridad y novedades del sector.
                <br />
                <span className="">Asesoráte con nuestros Ingenieros.</span>
=======
            <p className="text-center text-gray-600 font-bold text-2xl mb-10">Encontrá información sobre nuevas tecnologías, consejos de seguridad y novedades del sector.
                <br />
                <span className="">Asesoráte y crecé con los mejores.</span>
>>>>>>> 23266b174a75bc4f98346cbf5b17f1c51151b20a
            </p>
            <span className="w-full h-1 bg-[var(--primary)] block mb-10"></span>
            <CartaBlog />
        </section>
    );
}
