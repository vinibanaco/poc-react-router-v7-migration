import { Link } from "react-router";
import type { Route } from "./+types/versions-page";
import { ROUTES } from "./routing/enums";

export async function clientLoader() {
  const versions = await Promise.resolve([
    { id: 1, changes: "Added cheese" },
    { id: 2, changes: "Added pepperoni", isMostRecent: true },
  ]);

  return { versions };
}

function getIsSelectedVersion(
  versionId: string | undefined,
  version: { id: number; isMostRecent?: boolean }
) {
  return (
    Number(versionId) === version.id || (!versionId && version.isMostRecent)
  );
}

export default function VersionPage({
  loaderData: { versions },
  params,
}: Route.ComponentProps) {
  const { name, versionId } = params;

  return (
    <div>
      <h3>Versions of recipe {name}</h3>
      <ul>
        {versions.map((version) => {
          // @ts-expect-error https://github.com/remix-run/react-router/issues/12359
          const link = ROUTES.RECIPE_VERSION.replace(":name", name).replace(
            ":versionId",
            version.id.toString()
          );
          return (
            <li key={version.id}>
              <Link to={link}>{version.changes}</Link>
              {getIsSelectedVersion(versionId, version) && "<-- here"}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
