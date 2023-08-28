import About from "./home/sections/about";
import ClientsAre from "./home/sections/location";
import Features from "./home/sections/features";
import Pricing from "./home/sections/pricing";
import Testimonials from "./home/sections/testimonials";
import Form from "./home/sections/form";

export default function Home() {
  return (
    <main>
      <About />
      <Features />
      <Pricing />
      <ClientsAre />
      <Testimonials />
      <Form />
    </main>
  );
}
