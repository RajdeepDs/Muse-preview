import NavBar from "@/components/homepage/navbar";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="bg-bg container text-white">
        <div className="border-grey/20 border-b">
          <NavBar />
        </div>
        {children}
      </body>
    </html>
  );
}
