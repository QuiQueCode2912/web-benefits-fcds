import Container from '@/components/Container'
import { fetchBlogs } from "../services"
import Card from '@/components/Card';

export default async function page()  {

  const blogs = await fetchBlogs();
  
  return (
    <Container>
      <div className="space-y-10">
      <div className="text-2xl font-semibold text-black dark:text-white">
        ¡Un entorno mágico! 🪄
      </div>
      <div className="grid gap-8">
          {blogs?.data?.filter((blog:any) => blog.attributes.benefit_categorie.data.attributes.slug === 'bienestar').slice(0, 3).map((blog:any) => (
            <Card blog={blog} />
          ))}
        </div>
    </div>
    </Container>
  )
}