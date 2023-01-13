import Image from "next/image";

export default function Header() {
    return (
        <div className="text-center">
            <h2 className="margin-bottom-small">Patisserie</h2>
            <Image src={'/images/header-macarons.png'}
                width={3000}
                height={100}
                alt="macarons" />
        </div>
    )
}
