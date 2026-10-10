import { Link } from "react-router-dom";
import RevealText from "@/components/RevealText";

const NotFound = () => (
  <section className="mx-auto max-w-[1320px] px-6 py-32 md:px-10 md:py-44">
    <p data-reveal="fade" className="eyebrow mb-6">Page not found</p>
    <RevealText as="h1" className="max-w-xl text-5xl">This table hasn't been set.</RevealText>
    <p data-reveal="up" data-delay="1" className="mt-6 text-ink-soft">The page you were looking for isn't here.</p>
    <Link to="/" className="text-link mt-10">Back to Home</Link>
  </section>
);

export default NotFound;
