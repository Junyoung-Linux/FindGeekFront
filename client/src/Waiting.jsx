import React from "react";
import "./App.css"

class Waiting extends React.Component{
    render(){
        return(
            <>
            <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Find Geeks ! on GitHub</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
      />
    <link rel="stylesheet" href="./App.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.2.1/dist/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    {/* <script src="../assets/js/find-geeks.js"></script> */}
  </head>
  <body>
    <div id="body">
      {/* <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }"> */}
	<div class="flex flex-col flex-1 w-full">
	  <header class="z-10 bg-white shadow-md dark:bg-gray-800" style="padding-top:1rem; padding-bottom:0.5rem;">
	    <div class="container items-center justify-between mx-auto">
	      <div class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
		
		<div class="h-5">
		  <a href="/">
		    <img class="w-full h-full"
			 src={require("./images/find_geeks_logo.png")} alt="" loading="lazy"/>
		  </a>
		</div>
		<div class="flex justify-center flex-1 lg:mr-32">
		  <a href="https://github.com" target="_blank">
		    <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32"
			 data-view-component="true" class="ml-3 mr-3">
		      <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
		    </svg>
		  </a>

		  <div class="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
		    <div class="absolute inset-y-0 flex items-center pl-2">
		      <svg
			class="w-4 h-4"
			aria-hidden="true"
			fill="currentColor"
			viewBox="0 0 20 20">
			<path
			  fill-rule="evenodd"
			  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
			  clip-rule="evenodd">
			</path>
		      </svg>
		    </div>
		    <input
		      id="github_id_input"
		      onKeypress="javascript:if(event.keyCode==13) {search_github_id()}"
		      class="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
		      type="text"
		      placeholder="Search for GitHub ID"
		      aria-label="Search" />
		  </div>
		</div>
	      </div>
	      <p id="input_err" class="text-xs text-red-600 dark:text-red-400" style="margin-left: 29%; margin-top:0.5%"></p>
	    </div>
	  </header>
		<main class="mb-auto mt-auto text-center">
			<p>예상소요시간: 23분</p>
			<div class="spinner-border"  style="width:5rem;height:5rem"role="status">
			<span class="sr-only">Loading...</span>
			</div>
		</main>
	  </div>
	</div>
  
	</body>
            </>
            
        );
    }
}


export default Waiting;