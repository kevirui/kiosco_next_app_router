import CategoryIcon from "../ui/CategoryIcon";
import prisma from "@/src/lib/prisma";
import Logo from "../ui/Logo";

async function getCategories() {
  return await prisma.category.findMany();
}

export default async function OrderSidebar() {
  const categories = await getCategories();
  return (
    <aside className="bg-white md:w-72 md:h-screen">
      <Logo />
      <nav className="mt-10">
        {categories.map(
          (category: { id: number; name: string; slug: string }) => (
            <CategoryIcon key={category.id} category={category} />
          )
        )}
      </nav>
    </aside>
  );
}
