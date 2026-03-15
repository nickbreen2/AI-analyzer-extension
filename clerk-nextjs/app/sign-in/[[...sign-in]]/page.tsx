import { SignIn } from '@clerk/nextjs'
import { Header } from '@/components/ui/header-2'
import { Footer } from '@/components/ui/footer'
import { InfiniteGridBg } from '@/components/ui/infinite-grid-bg'

export default function SignInPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0f1f27',
        fontFamily: 'var(--font-gelasio), serif',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <InfiniteGridBg />
      <Header />
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '120px 16px 60px', position: 'relative', zIndex: 1 }}>
        <SignIn
          appearance={{
            variables: {
              colorPrimary: '#60a5fa',
              colorBackground: '#162736',
              colorInputBackground: '#1e3447',
              colorInputText: '#ffffff',
              colorText: '#ffffff',
              colorTextSecondary: 'rgba(255,255,255,0.5)',
              colorNeutral: '#ffffff',
              borderRadius: '12px',
              fontFamily: 'var(--font-gelasio), serif',
            },
            elements: {
              card: {
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
              },
              headerTitle: {
                color: '#ffffff',
                fontFamily: 'var(--font-gelasio), serif',
              },
              headerSubtitle: {
                color: 'rgba(255,255,255,0.5)',
              },
              socialButtonsBlockButton: {
                border: '1px solid rgba(255,255,255,0.15)',
                backgroundColor: 'rgba(255,255,255,0.05)',
                color: '#ffffff',
              },
              socialButtonsBlockButtonText: {
                color: '#ffffff',
              },
              dividerLine: {
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
              dividerText: {
                color: 'rgba(255,255,255,0.4)',
              },
              formFieldLabel: {
                color: 'rgba(255,255,255,0.7)',
              },
              footerActionLink: {
                color: '#60a5fa',
              },
              identityPreviewText: {
                color: '#ffffff',
              },
              identityPreviewEditButton: {
                color: '#60a5fa',
              },
            },
          }}
        />
      </div>
      <Footer />
    </div>
  )
}
