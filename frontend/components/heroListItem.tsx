type Props = {
  text: string;
};

export default function HeroListItem({ text }: Props) {
  return (
    <li className="flex items-center">
      <img className="inline w-6 h-6 mr-3" src="/images/check.svg" />
      <span className="text-lg leading-8 text-white">{text}</span>
    </li>
  );
}
