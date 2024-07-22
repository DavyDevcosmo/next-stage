import { FiSearch } from "react-icons/fi";

const SearchForm = () => (
  <form className="flex items-center" onSubmit={(ev) => ev.preventDefault()}>
    <input
      className="
        w-full max-w- p-1 rounded-l-lg border-2 border-transparent
        bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50
        focus:outline-none focus:border-blue-400 transition-colors
      "
      type="text"
      placeholder="Pesquisar..."
    />
    <button
      className="
        p-2  rounded-r-lg border-2 border-transparent
        bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50
        focus:outline-none focus:border-blue-400 focus:text-blue-400
        hover:border-blue-400 hover:text-blue-400 transition-colors
      "
    >
      <FiSearch className="text-lg" /> {/* Ajuste o tamanho do ícone se necessário */}
    </button>
  </form>
);

export default SearchForm;
