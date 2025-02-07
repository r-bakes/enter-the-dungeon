"use client";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import CharacterEngineProvider from "@/engines/characterEngineContext";
import { ModifierEngineProvider } from "@/engines/modifierEngineContext";
import { WorkingEngineProvider } from "@/engines/workingEngineContext";
import { MenuEngineProvider } from "@/engines/menuEngineContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="max-w-[theme(screens.4xl)] flex h-screen max-h-screen min-h-[800px] w-screen min-w-[800px] select-none">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CharacterEngineProvider>
            <ModifierEngineProvider>
              <WorkingEngineProvider>
                <MenuEngineProvider>
                  <Toaster position="bottom-left" closeButton />
                  <main className="flex h-full w-full">{children}</main>
                </MenuEngineProvider>
              </WorkingEngineProvider>
            </ModifierEngineProvider>
          </CharacterEngineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
