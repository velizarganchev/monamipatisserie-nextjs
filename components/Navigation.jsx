import Link from "next/link"
import Image from "next/image"
import { Badge } from "react-bootstrap"

export default function Navigation() {
    return (
        <nav class="border fixed split-nav background-danger">
            <div class="nav-brand">
                <h3><Link href="/">MonAmiPatisseri</Link></h3>
            </div>
            <div class="collapsible">
                <input id="collapsible1" type="checkbox" name="collapsible1" />
                <label for="collapsible1">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </label>
                <div class="collapsible-body">
                    <ul class="inline">
                        <li><Link href="/gallery">Gallery</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li>
                            <Link href="/cart">
                                <Image src={'/images/warenkorb.png'} alt='cart' width={30} height={30} />
                                {/* <span class="badge success" width={5} height={5} >2</span> */}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
