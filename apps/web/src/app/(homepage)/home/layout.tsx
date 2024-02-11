import NavBar from "@/components/homepage/navbar";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="bg-bg text-white container">
        <div className="border-b border-grey/20">
          <NavBar />
        </div>
        {children}
      </body>
    </html>
  );
}
