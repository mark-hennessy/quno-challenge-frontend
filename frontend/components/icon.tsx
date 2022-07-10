type Props = {
  name: string;
  alt: string;
  size: "xs" | "sm" | "md";
};

export default function Icon({ name, alt, size }: Props) {
  const sharedProps = {
    src: `/images/${name}`,
    alt,
  };

  if (size === "xs") {
    return <img {...sharedProps} className="inline w-4 h-4 mr-2" />;
  }

  if (size === "sm") {
    return <img {...sharedProps} className="inline w-5 h-5 mr-2" />;
  }

  return <img {...sharedProps} className="inline w-6 h-6 mr-2" />;
}
