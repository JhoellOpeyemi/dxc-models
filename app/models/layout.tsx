export const metadata = {
  title: "Models",
  description:
    "Explore the faces of DXC Models — a diverse representation of beauty, creativity, and individuality redefining modern modelling in Africa.",
  openGraph: {
    title: "Models | DXC Models",
    // url: '' this is the live url
  },
};

export default function ModelsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="page-container">{children}</div>;
}
