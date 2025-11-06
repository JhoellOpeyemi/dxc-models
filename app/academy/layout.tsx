export const metadata = {
  title: "Academy",
  description:
    "Join DXC Models Academy — professional training in modelling, grooming, and creative skills to build a strong foundation for your career.",
  openGraph: {
    title: "Academy | DXC Models",
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
