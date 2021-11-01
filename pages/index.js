import Head from 'next/head'
import Image from 'next/image'
import Card1 from '../components/Card1'
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";


import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="main-praveen">

      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}
