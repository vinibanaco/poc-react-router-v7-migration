import { useParams } from "react-router";

export default function DetailsPage() {
  const { name } = useParams<{ name: string }>();

  return `Details: ${name}`;
}
