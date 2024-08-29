import MarketingLayout from '@/components/MarketingLayout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <MarketingLayout>
      {children}
    </MarketingLayout>
  );
}
