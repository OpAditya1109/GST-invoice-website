import "./globals.css";

export const metadata = {
  title: "GST ITC",
  description: "Manage GST invoices effortlessly",
  icons: {
    icon: "/icon.png",       // main favicon
    shortcut: "/icon.png",   // optional
    apple: "/icon.png",      // for iPhone
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}