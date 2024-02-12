import NavBar from "@/components/homepage/navbar";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="bg-bg text-white">
        <div className="border-grey/10 border-b">
          <NavBar />
        </div>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
