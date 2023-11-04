import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  );
}

export { metadata };
export default RootLayout;
