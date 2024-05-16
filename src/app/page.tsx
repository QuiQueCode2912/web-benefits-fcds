import Container from "@/components/Container";
import Link from "next/link";
import { fetchBlogs } from "./services"
import BlogCard from "@/components/BlogCard";
import Card from "@/components/Card";


export default async function Home() {

  const blogs = await fetchBlogs();

  return (
    <Container>
      <h4 className="animate text-2xl font-semibold text-black dark:text-white">
      Descubre los beneficios de trabajar en Ciudad del Saber <span className="text-2xl">🚀</span> 
    </h4>
    <div className="space-y-16">
      <section>
        <article className="space-y-4 animate">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book. It has survived not only five centuries. 
            </p>
        </article>
      </section>

      <section className="animate space-y-6">
        <div className="flex flex-wrap gap-y-2 items-center justify-between">
          <h5 className="hover:underline font-semibold text-2xl text-black dark:text-white">
            <Link href="/formacion">Beneficios de Formación y desarrollo 🧩</Link>
          </h5>
          <Link href="/formacion">
            Mostrar todos
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {blogs?.data?.filter((blog:any) => blog.attributes.benefit_categorie.data.attributes.slug === 'formacion').slice(0, 4).map((blog:any) => (
            <BlogCard blog={blog}/>
          ))}
        </div>
      </section>

      <section className="animate space-y-6">
        <div className="flex flex-wrap gap-y-2 items-center justify-between">
          <h5 className="font-semibold text-2xl hover:underline text-black dark:text-white">
            <Link href="/bienestar">Cuidamos tu bienestar 🌱</Link>
          </h5>
          <Link href="/bienestar">
            Mostrar todos
          </Link>
        </div>
        <div className="grid gap-8 md:gap-12">
          {blogs?.data?.filter((blog:any) => blog.attributes.benefit_categorie.data.attributes.slug === 'bienestar').slice(0, 3).map((blog:any) => (
            <Card blog={blog} />
          ))}
        </div>
      </section>

      <section className="animate space-y-6">
        <div className="flex flex-wrap gap-y-2 items-center justify-between">
          <h5 className="font-semibold text-2xl hover:underline text-black dark:text-white">
            <Link href="/entorno">¡Un entorno mágico! 🪄</Link>
          </h5>
          <Link href="/entorno">
            Mostrar todos
          </Link>
        </div>
        <div className="grid gap-4">
          {blogs?.data?.filter((blog:any) => blog.attributes.benefit_categorie.data.attributes.slug === 'entorno').slice(0, 4).map((blog:any) => (
            <BlogCard blog={blog}/>
          ))}
        </div>
      </section>

      <section className="animate space-y-4">
        <h5 className="font-semibold text-black dark:text-white">
          Si tienes alguna duda busca a Lacey acá en el piso 1
        </h5>
        <article>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
          </p>
        </article>
      </section>
    </div>
    </Container>
  );
}
