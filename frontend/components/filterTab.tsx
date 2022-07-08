import classNames from "classnames";

type Props = {
  text: string;
  selected?: boolean;
};

export default function FilterTab({ text, selected }: Props) {
  return (
    <li>
      <button
        className={classNames(
          "border",
          "rounded-3xl",
          "text-sm",
          "leading-5",
          "px-5",
          "py-3",
          "whitespace-no-wrap",
          {
            "text-trueGray-700": !selected,
            "border-trueGray-300": !selected,
          },
          {
            "text-black": selected,
            "border-amber-300": selected,
            "bg-amber-300": selected,
          }
        )}
      >
        {text}
      </button>
    </li>
  );
}
