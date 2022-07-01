import React from "react";


class Mainpage extends React.Component{
    render(){
        return(
            <>
             <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Find Geeks ! on GitHub</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      rel="stylesheet" />
    <link rel="stylesheet" href="https://windmill-dashboard.vercel.app/assets/css/tailwind.output.css" />
    <script
      src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
      defer></script>
    <script src="../assets/js/init-alpine.js"></script>
  </head>
  <body>
    <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div class="flex items-center flex-col overflow-y-auto md:flex-row">
          <div class="p-6" style={{width:'50%'}}>
            <img
              aria-hidden="true"
              class="w-full h-full dark:hidden"
              src={require("./images/find_geeks_logo.png")}
              alt="Office"
	          style={{width:'70%',marginLeft:'20%'}} />

          </div>
          <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div class="w-full">
	      <div class="p-6 flex" style={{justifyContent: 'center'}}>
		<a href="https://github.com" target="_blank">
		<svg height="48" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="48" data-view-component="true" class="ml-3 mr-5">
		  <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
		</svg>
		</a>
	      </div>

              <label class="block text-sm">
                <input
                  class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="Search for GitHub ID" />
              </label>

              <a class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                href="./login.html">
		GitHub 활동결과분석
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
             
           
            </>
        )
    }
}



export default Mainpage;