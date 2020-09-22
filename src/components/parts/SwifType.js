import React from "react"
import { Helmet } from "react-helmet"

const swiftype = props => {
  return (
    <>
      <Helmet>
        <script type="text/javascript">{`

        (function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){
          (w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);
          e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;e.parentNode.insertBefore(s,e);
          })(window,document,'script','//s.swiftypecdn.com/install/v2/st.js','_st');

          _st('install','eyjN94XLv8vdiF3H87-P','2.0.0');

        `}</script>
      </Helmet>
    </>
  )
}

export default swiftype
