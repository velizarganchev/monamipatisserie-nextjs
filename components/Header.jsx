import Image from "next/image";

export default function Header() {
    return (
        <div className="text-center">
            <h2 className="margin-bottom-small">Patisserie</h2>
            <Image src={'/images/macarons-four.jpg'}
                width={2000}
                height={900}
                alt="macarons" />
        </div>
    )
}
