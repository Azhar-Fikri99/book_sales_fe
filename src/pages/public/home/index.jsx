import Hero from "../../../components/shared/Hero";
import ProductList from "../../../components/shared/ProductList";
import PublicLayout from "../../../layouts/public";

export default function Home()
{
  // ini kita masukin ke dalam components
  return(
    <>
    <PublicLayout>
        <Hero />
        <ProductList/>
      </PublicLayout>
    </>
  )
}