import "@css/animate.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/magnific-popup.css";
import "@css/main.css";
import "@css/meanmenu.css";
import "@css/nice-select.css";
import "@css/swiper-bundle.min.css";
import "./globals.css";
import Preloader from "@/layouts/Preloader";

export const metadata = {
  title: "BNI Nagercoil | Empowering Local Businesses Through Networking",
  description:
    "Join BNI Nagercoil to connect with professionals, grow your business through referrals, and expand networking opportunities.",
  keywords:
    "BNI Nagercoil, business networking, referral marketing, professional growth, local businesses, networking opportunities, BNI India",
  openGraph: {
    title: "BNI Nagercoil | Empowering Local Businesses Through Networking",
    description:
      "Join BNI Nagercoil to connect with professionals, grow your business through referrals, and expand networking opportunities.",
    url: "https://www.bninagercoil.com/",
    siteName: "BNI Nagercoil",
    images: [
      {
        url: "https://www.bninagercoil.com/assets/img/logo/bni-logo.png",
        width: 800,
        height: 600,
        alt: "BNI Nagercoil Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BNI Nagercoil | Empowering Local Businesses Through Networking",
    description:
      "Join BNI Nagercoil to connect with professionals, grow your business through referrals, and expand networking opportunities.",
    images: ["https://www.bninagercoil.com/assets/img/logo/bni-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
