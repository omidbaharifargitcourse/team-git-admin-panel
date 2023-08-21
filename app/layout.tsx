import { FC, ReactNode } from "react";

import "./globals.css";

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
