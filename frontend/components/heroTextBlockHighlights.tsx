import { PropsWithChildren } from "react";

type Props = {};

export default function HeroTextBlockHighlights({
  children,
}: PropsWithChildren<Props>) {
  return <ul className="grid gap-2">{children}</ul>;
}
