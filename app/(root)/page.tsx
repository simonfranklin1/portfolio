import { AboutMe, Header, HomeComponent, Portfolio, ContactMe, TestimonialSection } from "@/components";

export default function Home() {
  return (
    <main className="min-w-screen">
      <Header />
      <HomeComponent />
      <Portfolio />
      <AboutMe />
      <TestimonialSection />
      <ContactMe />
    </main>
  );
}