import type { Route } from "./+types/details-page";

export default function DetailsPage({ params }: Route.ComponentProps) {
  return `Details: ${params.name}`;
}
