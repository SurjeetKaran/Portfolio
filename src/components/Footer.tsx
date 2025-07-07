export default function Footer() {
  return (
    <footer className="relative w-full bg-black/80 backdrop-blur border-t border-white/10 text-gray-400 text-sm text-center py-6 z-10">
      <p className="px-4 leading-relaxed">
        © {new Date().getFullYear()}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-500 to-indigo-400 font-semibold">
          Surjeet Karan
        </span>
        . Built with{" "}
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          React
        </a>{" "}
        &{" "}
        <a
          href="https://vitejs.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          Vite
        </a>{" "}
        · Styled with{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          Tailwind CSS
        </a>
        .
      </p>
      <p className="mt-2 px-4">
        Code licensed under{" "}
        <a
          href="https://opensource.org/licenses/MIT"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          MIT License
        </a>
        .
      </p>
    </footer>
  );
}
