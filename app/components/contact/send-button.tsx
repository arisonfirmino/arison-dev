import { LoaderIcon, SendIcon } from "lucide-react";

export default function SendButton({ isLoading }: { isLoading: boolean }) {
  return (
    <div className="flex justify-end">
      <button
        type="submit"
        disabled={isLoading}
        className={`flex w-full items-center justify-center gap-2 text-nowrap rounded-xl px-5 py-2.5 text-white duration-500 hover:bg-black dark:text-black dark:hover:bg-background dark:hover:text-white md:w-fit ${isLoading ? "cursor-not-allowed bg-black text-foreground dark:bg-background" : "bg-primary text-black dark:bg-white dark:text-black"}`}
      >
        {isLoading ? (
          <LoaderIcon size={16} className="animate-spin" />
        ) : (
          <>
            <SendIcon size={16} />
            Enviar Mensagem
          </>
        )}
      </button>
    </div>
  );
}
