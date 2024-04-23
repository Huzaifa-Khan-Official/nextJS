import { getProductDetail } from "@/app/_lib/services/products.services";

export default async function ProductDetailPage({ params }) {
  const { pid } = params
  const productDetail = await getProductDetail(pid);
  if (!productDetail) return <h3>Product Not Found!</h3>

  console.log(productDetail);
  return (
    <div>
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
