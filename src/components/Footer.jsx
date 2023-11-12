export function Footer() {
    return (
        <footer className="flex flex-col-reverse items-center justify-center text-center lg:justify-between py-5 px-10 border-t lg:flex-row">
        <p className="text-sm text-gray-400">
          © Copyright 2023 Odyssey Inc. Todos os direiros reservados.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row text-sm text-gray-400">
          <li>
            <a
              href="/"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
            >
              Política de Privacidade
            </a>
          </li>
          <li>
            <a
              href="/"
            >
              Termos &amp; Condições
            </a>
          </li>
        </ul>
      </footer>
    )
}