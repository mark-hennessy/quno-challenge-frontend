type Props = {
  text: string;
};

export default function HeroTextBlockHighlight({ text }: Props) {
  return (
    <li className="flex items-start">
      <img
        className="inline w-6 h-6 mr-3"
        src="/images/check.svg"
        alt="checkmark"
      />
      <span className="text-lg leading-8 text-white">{text}</span>
    </li>
  );
}
