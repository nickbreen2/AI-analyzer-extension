import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "How to set up", href: "/auth-bridge" },
  { label: "FAQ", href: "/#faq" },
  { label: "Pricing", href: "/pricing" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="w-full px-8 py-10 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/icons/BrowserSky-white-mode.svg"
            alt="BrowserSky"
            width={120}
            height={20}
            className="h-5 w-auto"
          />
        </Link>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-white/30">
          © {new Date().getFullYear()} BrowserSky AI
        </p>
      </div>
    </footer>
  );
}
