import Link from "next/link"
import Container from "./Container"
import Logo from "./Logo"
import Nav from "./Nav"
import { fetchCategories } from "@/app/services"

export default async function Header() {

  const categories = await fetchCategories();

  console.log(categories)
  
  return (
    <header>
      <Container>
        <div className="flex flex-wrap gap-y-6 justify-between">
          <Link href="/"  aria-label="Volver a la página principal">
              <Logo />
          </Link>
          <Nav categories={categories} />
        </div>
      </Container>
    </header>
  )
}