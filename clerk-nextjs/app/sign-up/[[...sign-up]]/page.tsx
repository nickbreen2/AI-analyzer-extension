import { SignUp } from '@clerk/nextjs'
import { Footer } from '@/components/ui/footer'
import Image from 'next/image'
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Center content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(32px, 6vw, 60px) 16px 40px',
        position: 'relative',
        zIndex: 1,
        gap: '24px',
      }}>
        {/* Logo */}
        <Link href="/">
          <Image
            src="/icons/Browsersky-1.svg"
            alt="BrowserSky"
            width={140}
            height={24}
            className="h-6 w-auto"
          />
        </Link>

        <SignUp
          appearance={{
            variables: {
              colorPrimary: '#3b82f6',
              colorBackground: '#ffffff',
              colorInputBackground: '#f9fafb',
              colorInputText: '#111827',
              colorText: '#111827',
              colorTextSecondary: '#6b7280',
              colorNeutral: '#111827',
              colorBackgroundSecondary: '#f9fafb',
              borderRadius: '14px',
              fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
              fontSize: '15px',
            },
            elements: {
              logoBox: {
                display: 'none',
              },
              cardBox: {
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                borderRadius: '14px',
                width: '100%',
                maxWidth: '400px',
                overflow: 'hidden',
              },
              card: {
                background: 'transparent',
                border: 'none',
                boxShadow: 'none',
                padding: '32px',
                width: '100%',
              },
              headerTitle: {
                color: '#111827',
                fontSize: '20px',
                fontWeight: '600',
                letterSpacing: '-0.01em',
              },
              headerSubtitle: {
                color: '#9ca3af',
                fontSize: '14px',
              },
              socialButtonsBlockButton: {
                border: '1px solid #e5e7eb',
                backgroundColor: '#f9fafb',
                color: '#111827',
                borderRadius: '10px',
                height: '44px',
                transition: 'background 0.15s',
              },
              socialButtonsBlockButtonText: {
                color: '#111827',
                fontWeight: '500',
              },
              dividerLine: {
                backgroundColor: '#e5e7eb',
              },
              dividerText: {
                color: '#9ca3af',
                fontSize: '13px',
              },
              formFieldLabel: {
                color: '#6b7280',
                fontSize: '13px',
                fontWeight: '500',
              },
              formFieldInput: {
                backgroundColor: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '10px',
                color: '#111827',
                height: '44px',
              },
              formButtonPrimary: {
                backgroundColor: '#3b82f6',
                borderRadius: '10px',
                height: '44px',
                fontSize: '15px',
                fontWeight: '500',
              },
              footerActionLink: {
                color: '#3b82f6',
              },
              footerActionText: {
                color: '#6b7280',
              },
              footerAction: {
                paddingTop: '8px',
              },
              identityPreviewText: {
                color: '#111827',
              },
              identityPreviewEditButton: {
                color: '#3b82f6',
              },
              footer: {
                background: '#f9fafb',
                borderTop: '1px solid #e5e7eb',
              },
              footerPages: {
                background: '#f9fafb',
              },
            },
          }}
        />
      </div>

      <Footer />
    </div>
  )
}
