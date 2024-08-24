import { AboutMe, Header, HomeComponent, Portfolio, ContactMe } from "@/components";

export default function Home() {
  return (
    <main className="min-w-screen">
      <Header />
      <HomeComponent />
      <Portfolio />
      <AboutMe />
      <ContactMe />
    </main>
  );
}