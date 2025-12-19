// import { Html, Head, Main, NextScript } from 'next/document';

// const GA_MEASUREMENT_ID = 'G-GPH1BLVRCN'; // Replace with your Measurement ID

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head>
//         {/* Google Analytics Script */}
//         <script
//           async
//           src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
//         ></script>
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', '${GA_MEASUREMENT_ID}', {
//                 page_path: window.location.pathname,
//               });
//             `,
//           }}
//         ></script>
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }


import { Html, Head, Main, NextScript } from 'next/document';

const GA_MEASUREMENT_ID = 'G-GPH1BLVRCN'; // Replace with your Measurement ID
const CLARITY_PROJECT_ID = 'tnw0aaztg0';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Analytics Script */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        ></script>

        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;
  t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];
  y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
