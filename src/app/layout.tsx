import type { Metadata } from 'next';
import Header from './components/header/header';
import 'modern-normalize/modern-normalize.css';
import '../styles/global.scss';
import SiteMenu from './components/site-menu/site-menu';
import Footer from './components/footer/footer';
import SvgIcons from './components/svg-icons/svg-icons';

export const metadata: Metadata = {
  title: 'Виенто - вентиляционные cистемы',
  description: 'Виенто - вентиляционные cистемы',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="page">
        <Header customClassName="page__header"/>

        <main className="page__main page-main">
          <div className="page-main__container">
            <SiteMenu customClassName="page-main__menu"/>
            {children}
          </div>
        </main>

        <Footer customClassName="page__footer"/>
        <SvgIcons/>
      </body>
    </html>
  )
}
