import type { MetaFunction } from "@remix-run/cloudflare";
import Footer from "./__components/Footer";
import Slider from "./__components/Slider";
import Products from "./__components/Products";
import Warranty from "./__components/Warranty";
import Header from "./__components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <main id="content">
        <Slider />
        <Products />
        <Warranty />
      </main>
      {/* <Footer /> */}
    </>

  );
}
