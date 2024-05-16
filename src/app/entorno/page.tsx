import Container from '@/components/Container'
import { fetchBlogs } from "../services"
import BlogCard from '@/components/BlogCard';
import BackButton from '@/components/BackButton';

export default async function page()  {

  const blogs = await fetchBlogs();

  return (
    <Container>
      <div className="space-y-10">
      <BackButton />
      <div className="text-2xl font-semibold text-black dark:text-white">
        ¡Un entorno mágico! 🪄
      </div>
      <div className="grid gap-4">
          {blogs?.data?.filter((blog:any) => blog.attributes.benefit_categorie.data.attributes.slug === 'entorno').slice(0, 4).map((blog:any) => (
            <BlogCard blog={blog}/>
          ))}
        </div>
    </div>
    </Container>
  )
}