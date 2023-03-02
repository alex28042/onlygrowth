import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Home: Onlygrowth"
        description="Welcome to onlyfans agencia para poder ayudarte a ganar dinero con tus fotos como modelo de onlyfans con tu contenido exclusivo."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>Onlygrowth</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="keywords" content="agencia de onlyfans, modelos onlyfans, contenido exclusivo onlyfans" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
