interface SearchProjectProps {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchProject({ onSearch }: SearchProjectProps) {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        type="text"
        placeholder="Procure por um projeto"
        className="w-full overflow-hidden text-ellipsis text-nowrap rounded-lg border border-solid border-black border-opacity-50 bg-transparent p-2.5 outline-none focus:border-opacity-100 dark:border-white dark:border-opacity-10 dark:focus:border-opacity-100"
        onChange={onSearch}
      />
    </form>
  );
}
