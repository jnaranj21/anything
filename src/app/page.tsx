import Card from "@/components/Card/Card";
import "../styles/main.scss";

export default function Home() {
  return (
    <main className="main">
      <h1>App</h1>
      <Card text="This is a card" color="red" />
      <Card text="This is another card" color="green" />
      <Card text="example" />
      <Card text="banana" />
    </main>
  );
}
