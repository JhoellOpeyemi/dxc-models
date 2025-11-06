export const metadata = {
  title: "Become a Model",
  description:
    "Start your modelling journey with DXC Models. Submit your application and join a community redefining beauty and confidence in Lagos.",
  openGraph: {
    title: "Become a Model | DXC Models",
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
