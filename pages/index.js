//import styles from '../styles/Home.module.css'
import Image from "next/image"

export default function Home() {
  return (
    <div className="text-center container">
      <h3>Patisserie</h3>
      <Image src={'/images/macarons-two.jpg'} width={3000} height={200} alt="ezero"/>
    </div>
  )
}
