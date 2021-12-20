import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bubble Listing | Home</title>
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Aliqua ea ad deserunt magna. Sunt sit mollit cupidatat qui commodo
        adipisicing id nostrud anim adipisicing cillum magna irure. Mollit
        laborum consequat amet minim commodo duis velit incididunt aute
        adipisicing. Duis deserunt ex sit esse. Ullamco eiusmod consequat magna
        proident ullamco tempor non Lorem ut mollit sit culpa Lorem dolore.
      </p>
      <p className={styles.text}>
        Est ut enim ad adipisicing nulla sit. Exercitation aute laboris dolore
        qui exercitation excepteur eu quis. Id do non occaecat nostrud fugiat
        tempor commodo fugiat cillum Lorem Lorem aliquip. Id officia non sint
        quis consectetur fugiat tempor amet dolore. Sunt sunt magna aute do
        dolor eiusmod anim ut officia. Minim sint officia incididunt mollit non
        veniam aliqua magna cillum.
      </p>
      <Link href="/ninjas" >
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}
