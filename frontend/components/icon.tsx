import classNames from "classnames";

type Props = {
  name: string;
  alt: string;
  size: "xs" | "sm" | "md";
  fitted?: boolean;
  className?: string;
};

export default function Icon({ name, alt, size, fitted, className }: Props) {
  const sharedProps = {
    src: `/images/${name}`,
    alt,
  };

  const sharedClassNames = classNames("inline", { "mr-2": !fitted }, className);

  if (size === "xs") {
    return (
      <img
        {...sharedProps}
        className={classNames("w-4 h-4", sharedClassNames)}
      />
    );
  }

  if (size === "sm") {
    return (
      <img
        {...sharedProps}
        className={classNames("w-5 h-5", sharedClassNames)}
      />
    );
  }

  return (
    <img {...sharedProps} className={classNames("w-6 h-6", sharedClassNames)} />
  );
}
