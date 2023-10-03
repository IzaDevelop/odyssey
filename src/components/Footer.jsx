export function Footer() {
    return (
        <footer className="flex flex-col-reverse items-center justify-center text-center lg:justify-between py-5 px-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2023 Odyssey Inc. Todos os direiros reservados.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Política de Privacidade
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Termos &amp; Condições
            </a>
          </li>
        </ul>
      </footer>
    )
}