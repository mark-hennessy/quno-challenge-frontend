import { PropsWithChildren } from "react";
import Nav from "./nav";

type Props = {};

export default function Layout({ children }: PropsWithChildren<Props>) {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
}
