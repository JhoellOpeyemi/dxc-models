export const metadata = {
  title: "Home",
  description:
    "Discover DXC Models — Lagos modern, inclusive modelling and talent development agency helping creatives shine locally and globally.",
  openGraph: {
    title: "Home | DXC Models",
    description:
      "Discover DXC Models — Lagos modern, inclusive modelling and talent development agency helping creatives shine locally and globally.",
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
