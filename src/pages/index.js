import Head from "next/head";
import Image from "next/image";
import RecentProjects from "../components/UI/RecentProjects";
import Hero from "../components/UI/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <RecentProjects />
    </>
  );
}
