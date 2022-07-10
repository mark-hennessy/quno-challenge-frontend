import classNames from "classnames";

type Props = {
  text: string;
  selected?: boolean;
  onClick: () => void;
};

export default function FilterTab({ text, selected, onClick }: Props) {
  return (
    <li>
      <button
        className={classNames(
          "border rounded-3xl text-sm leading-5 px-5 py-3 whitespace-no-wrap",
          {
            "text-trueGray-700": !selected,
            "border-trueGray-300": !selected,
          },
          {
            "border-amber-300": selected,
            "bg-amber-300": selected,
          }
        )}
        aria-selected={selected}
        onClick={onClick}
      >
        {text}
      </button>
    </li>
  );
}
