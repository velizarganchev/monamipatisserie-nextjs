import jsondb from '../jsondb/products'
import Image from 'next/image'

export default function ProductList() {
    return (

        <div>
            <h3 className='text-center'>Our Products</h3>
            <div className="row flex-spaces">
                {
                    jsondb.products.map((product) => (
                        <div key={product.name} className='padding-small child-borders'>
                            <div class="card " style={{ width: "16rem" }}>
                                <div class="card-body ">
                                    <h4 class="card-title">{product.name}</h4>
                                    <h5 class="card-subtitle">{product.description}</h5>
                                    <button>Let me go here!</button>
                                </div>
                                <Image width={450} height={10} class="image-bottom" src={product.image} alt="Card example image" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
