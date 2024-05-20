import { JSX } from "react";

type Switch = {
  concealYoutube: boolean;
  setConcealYoutube: Function;
};

export default function Switch({
  concealYoutube,
  setConcealYoutube,
}: Switch): JSX.Element {
  return (
    <button
      onClick={() => setConcealYoutube((prevValue: boolean) => !prevValue)}
      className="relative border border-gray-50 p-1 w-12 h-1.5 rounded-full bg-white focus-visible:outline-indigo-400 dark:bg-transparent dark:focus-visible:outline-yellow-400"
    >
      <div
        className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition-[left,transform,backgroundColor] duration-300 ease-out ${
          concealYoutube ? "left-full" : "left-0"
        }`}
      >
        <div
          className={`h-5 w-5 rounded-full transition-[background] duration-300 ease-out ${
            concealYoutube ? "left-full bg-gray-600" : "left-0 bg-gray-300"
          }`}
        />
      </div>
    </button>
  );
}
