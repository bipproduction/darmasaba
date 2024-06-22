import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { fetchApiServer } from '@/lib/api/fetchApiServer';
import appConfig from '../../app.config';
fetchApiServer.init(appConfig.host)

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <head>
        <ColorSchemeScript />
      </head>
      <body suppressHydrationWarning>
        <MantineProvider >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
