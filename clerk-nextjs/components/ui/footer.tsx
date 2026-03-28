import Image from "next/image";
import Link from "next/link";

const allLinks = [
  { label: "How to set up", href: "/auth-bridge" },
  { label: "FAQ", href: "/#faq" },
  { label: "Pricing", href: "/pricing" },
  { label: "Support", href: "/support" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

function GitHubButton() {
  return (
    <a
      href="https://github.com/nickbreen2/BrowserSky-AI"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-200 shrink-0 whitespace-nowrap"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
      Contribute on GitHub
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200">

      {/* Mobile (< md) */}
      <div className="md:hidden flex flex-col items-center gap-4 px-6 py-8">
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
          {allLinks.map((link, i) => (
            <span key={link.label} className="flex items-center gap-4">
              <Link href={link.href} className="text-xs text-gray-400 hover:text-gray-900 transition-colors">
                {link.label}
              </Link>
              {i < allLinks.length - 1 && <span className="text-gray-300 text-xs">·</span>}
            </span>
          ))}
        </div>
        <GitHubButton />
      </div>

      {/* Tablet + Desktop (md+) */}
      <div className="hidden md:flex items-center justify-between w-full px-8 py-8 gap-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/icons/Browsersky-1.svg"
            alt="BrowserSky"
            width={140}
            height={22}
            className="h-6 w-auto"
          />
        </Link>
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {allLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <GitHubButton />
      </div>

    </footer>
  );
}
