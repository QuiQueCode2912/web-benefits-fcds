import Container from "@/components/Container"
import { fetchBlogs } from "../services"
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import BackButton from "@/components/BackButton";

export default async function page() {

  const blogs = await fetchBlogs();

  return (
    <Container>
      <div className="space-y-8 ">
        <BackButton />
        <div className="text-2xl font-semibold text-black dark:text-white">
          Formación y desarrollo 🧩
        </div>
        <div className="">
          Destinamos a capacitaciones y actividades de desarrollo el 2% del presupuesto de nuestra nómina anual. Esto representa más de +3000 horas de capacitación y +150 personas capacitadas.
        </div>
        <div className="grid md:grid-cols-2 gap-4">
            {blogs?.data?.filter((blog:any) => blog.attributes.benefit_categorie.data.attributes.slug === 'formacion').map((blog:any) => (
              <BlogCard blog={blog}/>
            ))}
        </div>
      </div>
    </Container>
  )
}