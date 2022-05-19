import { SessionProvider } from "next-auth/react";
import "../style/global.css";
import "../style/index.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <div className="min-h-screen bg-gradient-to-b from-sky-200 to-green-100">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
