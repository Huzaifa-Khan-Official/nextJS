import Link from "next/link";
import { getProducts } from "./_lib/services/products.services";

export default async function ProductPage() {
  const products = await getProducts();

  if (!products) return <h1>Products Not Found!</h1>
  return (
    <div>
      {
        products.products.map((product, index) => {
          return (
            <div key={index}>
              <div className="flex">
                <img src={product.thumbnail} alt="" />
                <Link href={`${product.id}`} className="text-3xl font-bold underline">
                  {
                    product.title
                  }
                </Link>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}