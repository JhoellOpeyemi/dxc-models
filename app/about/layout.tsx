export const metadata = {
  title: "About",
  description:
    "DXC Models is a modern, inclusive modelling and talent agency in Lagos focused on creativity, diversity and professional growth.",
  openGraph: {
    title: "About | DXC Models",
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
