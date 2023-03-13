import './globals.css'

export const metadata = {
  title: '나의 MBTI 알아보기',
  description: '다양한 주제를 통해 나의 성향을 찾아보세요!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
