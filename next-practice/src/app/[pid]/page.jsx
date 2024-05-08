import Link from "next/link";
import { getProductDetail } from "../_lib/services/products.services";

export async function generateMetadata({ params }) {
    const { pid } = params;
    const productDetail = await getProductDetail(pid);
    if (!productDetail || productDetail.message) return { title: "Product Not Found" }
    return {
        title: productDetail.title
    }
}

export default async function ProductDetailPage({ params }) {
    const { pid } = params;
    console.log(pid);
    const productDetail = await getProductDetail(pid);
    if (!productDetail || productDetail.message) return <h3>Product Not Found!</h3>
    return (
        <div>
            <Link href="/"><p>Back To Home:</p></Link>
            {
                <div>
                    <h1>
                        {
                            productDetail.title
                        }
                    </h1>
                </div>
            }
        </div>
    )
}
