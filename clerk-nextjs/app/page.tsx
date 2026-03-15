"use client";

import { Header } from "@/components/ui/header-2";
import { HeroWithMockup } from "@/components/ui/hero-with-mockup";
import { InfiniteGridBg } from "@/components/ui/infinite-grid-bg";
import { FAQSection } from "@/components/ui/faq-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen font-[family-name:var(--font-gelasio)]" style={{ background: "#0f1f27" }}>
      <div className="relative">
        <InfiniteGridBg />
        <Header />
        <main>
          <HeroWithMockup
            title={"Chat with Any\nWeb Page, Instantly"}
            description="BrowserSky AI brings intelligent AI conversations to every tab. Ask questions, summarize pages, and get instant answers — without leaving your browser."
            primaryCta={{
              text: "Get Extension",
              href: "https://chromewebstore.google.com",
            }}
            mockupImage={{
              src: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1248&h=765&fit=crop",
              alt: "BrowserSky AI Extension Interface",
              width: 1248,
              height: 765,
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
