"use client";

import { Header } from "@/components/ui/header-2";
import { HeroWithMockup } from "@/components/ui/hero-with-mockup";
import { FAQSection } from "@/components/ui/faq-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen font-[family-name:var(--font-gelasio)]" style={{ background: "#ffffff" }}>
      {/* Hero background — fades into white */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none" style={{ height: "680px" }}>
        <img
          src="/icons/Browsersky-background.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 35%, rgba(255,255,255,0.6) 65%, #ffffff 85%)",
          }}
        />
      </div>
      <div className="relative">
        <Header />
        <main>
          <HeroWithMockup
            title={"Chat with Any\nWeb Page, Instantly"}
            description="BrowserSky AI brings intelligent AI conversations to every tab. Ask questions, summarize pages, and get instant answers — without leaving your browser."
            primaryCta={{
              text: "Get Extension",
              href: "https://chromewebstore.google.com/detail/browsersky-ai/bgdicffbhcmckenhplfjonafaafjaeok",
            }}
            mockupVideo={{
              src: "/icons/Browsersky-(demo)-(1).mp4",
            }}
          />
          <div id="faq">
            <FAQSection />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
