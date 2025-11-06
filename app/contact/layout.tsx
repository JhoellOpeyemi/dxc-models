export const metadata = {
  title: "Contact",
  description:
    "Connect with DXC Models — collaborate, partner, or join our growing network of creative professionals and aspiring models.",
  openGraph: {
    title: "Contact | DXC Models",
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
