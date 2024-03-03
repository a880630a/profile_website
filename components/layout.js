import Head from "next/head";
import NavBar from "./navBar";
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta name="title" content="next project" />
      </Head>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
