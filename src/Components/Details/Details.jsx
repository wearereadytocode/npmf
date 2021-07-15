import React from 'react'
import './Details.css'
function Details() {
    return (
        <div className="Details">
           <div className="container">
           <h1>React</h1>
           <hr />
               <div className="row">
                   <div className="col-md-8">
                       <p>Version 3.4.3</p>
                       <p className="desc">
                       React is a JavaScript library for creating user interfaces.

                        The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web, or react-native for the native environments.

                        Note: by default, React will be in development mode. The development version includes extra warnings about common mistakes, whereas the production version includes extra performance optimizations and strips all error messages. Don't forget to use the production build when deploying your application.
                       </p>
                       
                   </div>
                   <div className="col-md-4">
                       <div className="link-section">
                       <a href="#" className="links">Npm &nbsp;   <i class="ri-npmjs-line"></i></a>
                       <a href="#" className="links">Repository &nbsp;  <i class="ri-git-repository-line"></i></a>
                       <a href="#" className="links">Home Page &nbsp;  <i class="ri-home-2-line"></i></a>
                       <a href="#" className="links">Bug &nbsp;  <i class="ri-bug-line"></i></a>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Details
