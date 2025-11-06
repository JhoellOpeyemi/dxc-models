export const metadata = {
  title: "Shop",
  description:
    "Shop curated modelling guides, digital resources and creative products from DXC Models.",
  openGraph: {
    title: "Shop | DXC Models",
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
