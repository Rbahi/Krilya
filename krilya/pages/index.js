import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "./Header";
import Banner from "./Banner";
import SmallCard from "./SmallCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ exploreData }) {
  return (
    <>
      <Head>
        <title>Krilya</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/../public/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto">
        <section className="pt-6">
          <h2 className="text-3xl font-bold pb-5">Explore Nearby</h2>
          {/* Data endpoint fetching */}
          {exploreData?.map(({img, name, model}) => (
            <SmallCard key={img} img={img} name={name} model={model} />
          ))}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch(
    "https://nox281.github.io/Krilya/krilya/public/data.json"
  ).then((res) => res.json());
  return {
    props: {
      exploreData,
    },
  };
}
