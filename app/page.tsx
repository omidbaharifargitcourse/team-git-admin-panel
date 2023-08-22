import { FC } from "react";
import SidebarLayout from "@layouts/sidebarLayout";
import { getBlogs, getCategories } from "@services/shortLinks";

interface Props {
  searchParams: TSearchParams;
}

const Home: FC<Props> = async ({ searchParams }) => {
  const [getBlogsRes, getCategoriesRes] = await Promise.all([
    getBlogs(
      `category=${searchParams.category || ""}&search=${
        searchParams.search || ""
      }`
    ),
    getCategories(),
  ]);

  return (
    <main>
      <SidebarLayout categoriesList={getCategoriesRes}>
      </SidebarLayout>
    </main>
  );
};

export default Home;
