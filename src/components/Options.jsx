export function Options() {
  return (
    <div>
      <div className="flex flex-col py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-10 lg:flex-row">
        <div className="mb-5 lg:w-1/3 lg:mb-0 lg:mr-20">
          <h2 className="relative mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Odyssey</span>
            </span>{' '}
            e você!
          </h2>
          <p className="mb-4 text-gray-900 lg:mb-6">
          Estamos aqui para oferecer a tranquilidade e conforto que você merece. Te oferecemos agendementos rápidos, resultados on-line, entrega de medicamentos e muito mais
          </p>
        </div>
        <div className="flex-grow pt-1">
          {/* <div className="flex items-center mb-3">
            <span className="font-bold tracking-wide text-gray-900">
              Categorias
            </span>
            <span className="ml-1">
              <svg
                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
          </div> */}
          <div className="grid grid-cols-2 gap-2 row-gap-6 sm:grid-cols-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Check-up Preventivo
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Fisioterapia
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Consultas
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Agendamento Online
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Central de Atendimento
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Rede Clínicas Parceiras
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Pronto Atendimento
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Resultados on-line
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Exames Laboratoriais
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Vacinação
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Prenatal
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Odontológia
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Acupuntura
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Psicoterapia
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Cirurgias Eletivas
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                >
                  Medicamentos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative mb-10">
        <img
          className="object-cover w-full h-56 sm:h-96"
          src="https://saude.novartis.com.br/colesterolalto/wp-content/uploads/sites/28/2021/06/equipe-medica.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
      </div>
    </div>
  );
};