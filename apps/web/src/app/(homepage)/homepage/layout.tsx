import FooterSection from "@/components/homepage/footer-section";
import NavBar from "@/components/homepage/navbar";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="bg-bg text-white">
        {/* Backdrop filter div */}
        <div className="h-header pointer-events-none fixed left-0 right-0 top-0 z-10 backdrop-blur-3xl">
          {/* This div will apply the backdrop filter */}
        </div>

        {/* Header div with transparency */}
        <header className="border-grey/10 fixed left-0 right-0 top-0 z-20 border-b bg-transparent py-1">
          <NavBar />
        </header>

        <main className="padding-header">{children}</main>

        <footer className="mb-16">
          <FooterSection />
        </footer>
      </body>
    </html>
  );
}
