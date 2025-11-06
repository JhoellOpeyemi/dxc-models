export const metadata = {
  title: "Blog",
  description:
    "Explore DXC Models' blog — insights on modelling, lifestyle, and creative growth for aspiring and professional models.",
  openGraph: {
    title: "Blog | DXC Models",
    // url: '' this is the live url
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="page-container">{children}</div>;
}
