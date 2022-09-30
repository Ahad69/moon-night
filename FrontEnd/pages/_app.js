import '../styles/globals.css'
import 'animate.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import { useAmp } from 'next/amp'

export const config = { amp: 'hybrid' }

function MyApp({ Component, pageProps }) {

  const isAmp = useAmp()

  return( <>
     { isAmp ? 
        
        <p>AMP</p>
       :

      <div>
         <Component {...pageProps} />
       <ToastContainer 
       position="top-center"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       />
      </div>
      
    }

    </>
    
    )
}

export default MyApp
