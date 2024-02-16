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
        <header className="border-grey/10 fixed left-0 right-0 top-0 border-b py-1 backdrop-blur-2xl">
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
