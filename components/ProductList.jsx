import Image from 'next/image'
import Link from 'next/link'

export default function ProductList({ products }) {
    return (

        <div>
            <h3 className='text-center'>Our Products</h3>
            <div className="row flex-spaces">
                {
                    products?.map((product) => (
                        <div key={product.name} className='padding-small child-borders'>
                            <div className="card " style={{ width: "15rem" }}>
                                <div className="card-body ">
                                    <h4 className="card-title">{product.name}</h4>
                                    <h5 className="card-subtitle">{product.description}</h5>
                                    <button>Add to Cart</button>
                                </div>
                                <Link href={`/product/${product.url}`} style={{ background: "none", color: "#41403e" }} >
                                    <Image width={300} height={10} className="image-bottom" src={product.image} alt="Card example image" />
                                </Link>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
