import Breadcrumbs from "../common-components/breadcrumbs";
import type { Route } from "./+types/category-page";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const recipes = await Promise.resolve([
    { id: 1, name: "Pizza", category: params.categoryId },
    { id: 2, name: "Pasta", category: params.categoryId },
  ]);

  return { recipes, category: params.categoryId.toLocaleUpperCase() };
}

export default function CategoryPage({
  loaderData: { recipes, category },
}: Route.ComponentProps) {
  return (
    <div>
      <Breadcrumbs />
      <h2>Category: {category}</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}
