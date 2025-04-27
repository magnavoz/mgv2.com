import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="/multimedia/img/logo-MAGNAVOZ-blanco_Mesa-de-trabajo-1-copia-2.png"
              alt="Magnavoz"
              className="h-12 mb-4"
            />
            <p className="text-gray-400">
              Soluciones de comunicación innovadoras para empresas modernas.
            </p>
            <div className="mt-4">
              <p className="text-gray-400">RUC: 20602628761</p>
              <p className="text-gray-400">Razón Social: MAGNAVOZ S.A.C.</p>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre-magnavoz" className="text-gray-400 hover:text-white">
                  Sobre Magnavoz
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-white">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/contactanos" className="text-gray-400 hover:text-white">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/magnavozsac/?locale=es_LA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/magnavoz/?originalSubdomain=pe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:noc@magnavoz.com" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Magnavoz. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}