import Link from "next/link"
import Image from "next/image"
import { useSelector } from "react-redux"

export default function Navigation() {
    const cQuantity = useSelector((state) => state.cart.cQuantity)
    return (
        <nav className="border  split-nav background-danger">
            <div className="nav-brand">
                <h3><Link href="/">MonAmiPatisseri</Link></h3>
            </div>
            <div className="collapsible">
                <input id="collapsible1" type="checkbox" name="collapsible1" />
                <label htmlFor="collapsible1">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </label>
                <div className="collapsible-body">
                    <ul className="inline">
                        <li><Link href="/gallery">Gallery</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li>
                            <Link href="/cart">
                                {cQuantity > 0 ? (
                                    <>
                                        <Image src={'/images/warenkorb.png'} style={{display: "inline"}} alt='cart' width={30} height={30} />
                                        <span className="badge success" style={{fontSize: "30%"}} width={5} height={5} >{cQuantity}</span>
                                    </>
                                ) : (<Image src={'/images/warenkorb.png'} alt='cart' width={30} height={30} />)}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
