import '../styles/globals.css'
import Loader from '../components/Loader'
import type { AppProps } from 'next/app'
import { useEffect, useState, useRef } from 'react'
import Works from '../components/Works'

function MyApp({ Component, pageProps }: AppProps) {

  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {


    setTimeout(() => {
      setIsLoading(true)
    }, 3800)


  },[isLoading])
  

//   useEffect(() => {
//     /* @ts-ignore */
//     let scroll: any;
//     /* @ts-ignore */
//     import("locomotive-scroll").then((locomotiveModule) => {
//         scroll = new locomotiveModule.default({
//             el: document.querySelector("[data-scroll-container]"),
//             smooth: true,
//             smoothMobile: false,
//             resetNativeScroll: true
//         });
//     });
//     window.dispatchEvent(new Event('resize'))

//     if (scroll) {
//       scroll.destroy();
//     }
// }, [Component]);

  return (
    <>
        {isLoading ? (<Component {...pageProps}  />) : <Loader />}
    </>
  )
}

export default MyApp
