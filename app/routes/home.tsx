import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "WewantWaste Skip Page Redesign" },
    { name: "description", content: "This!" },
  ];
}

export default function Home() {
  return <div>Home</div>;
}
