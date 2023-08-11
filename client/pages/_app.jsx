import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { NextUIProvider } from "@nextui-org/react";
import "../styles/globals.css";
import { Sidebar, Navbar } from "../components";
import { StateContextProvider } from "../context";
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Goerli}
      activeChain={"goerli"}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}>
      <NextUIProvider>
        <StateContextProvider>
          <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
            <div className="sm:flex hidden mr-10 relative">
              <Sidebar />
            </div>
            <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
              <Navbar />
              <Component {...pageProps} />
            </div>
          </div>
        </StateContextProvider>
      </NextUIProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
