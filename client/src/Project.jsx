import React from "react";

class Project extends React.Component{
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
    <link rel="stylesheet" href="../assets/css/tailwind.output.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.2.1/dist/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="../assets/js/find-geeks.js"></script>
  </head>
  <body>
    <div id="body">
      
	<div class="flex flex-col flex-1 w-full">
	  <header class="z-10 bg-white shadow-md dark:bg-gray-800" style={{paddingTop:"1rem", paddingBottom:"0.5rem"}}>
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
	      <p id="input_err" class="text-xs text-red-600 dark:text-red-400" style={{marginLeft: "29%", marginTop:"0.5%"}}></p>
	    </div>
	  </header>
	  <div class="h-full overflow-y-auto">
	    <div class="container px-6 mx-auto grid"/>
	      <h3 class="flex my-6 text-xl font-semibold text-gray-700 dark:text-gray-200">
		<div class="relative w-8 h-8 mr-3 rounded-full">
		  <img id="avatar_url" class="object-cover w-full h-full rounded-full"
		       src="https://avatars.githubusercontent.com/u/48503?v=4" alt="" loading="lazy"/>
		  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
		</div>
		<p id="github_id" class="mr-3 font-medium text-gray-500 dark:text-gray-400">
		  Namhyung</p>
		활동 프로젝트
	      </h3>
	      <div class="flex items-center">
		<p class="mb-8 text-red-600 dark:text-red-400">
		  * 참고: 주요 GitHub 프로젝트 10개를 선택해주세요.
		</p>
		<button onclick="select_projects()" class="ml-3 mb-8 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"/>
		  GitHub 활동 결과분석 →
	      </div>

	      
	      <div class="ml-4 mr-5 mb-8 min-w-0 bg-white rounded-lg shadow-xs dark:bg-gray-800">
		<div class="w-full overflow-hidden rounded-lg shadow-xs">
		  <div class="w-full overflow-x-auto">
		    <table class="w-full whitespace-no-wrap">
		      <>
			<tr class="text-xs font-semibold tracking-wide text-left text-gray-500 border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
			  <th class="px-4 py-3"></th>
			  <th class="px-4 py-3">프로젝트명</th>
			  <th class="px-2 py-3 flex"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block mr-2">
			      <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
			    </svg>Star</th>
			  <th class="px-4 py-3">프로젝트 설명 <g class="text-gray-400">(Description)</g></th>
			  <th class="px-4 py-3">관련키워드 (topic)</th>
			</tr>
		      </>
		      <tbody id="proj_table" class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
			<tr class="text-gray-700 dark:text-gray-400">
			  <td class="px-4 py-3 text-sm">
			    <input type="checkbox" onclick="check_limited('namhyung/uftrace')" class="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray" name="namhyung/uftrace" checked />
			  </td>
			  <td class="px-4 py-3 text-sm">
			    <a class="text-gray-700" href="https://github.com/namhyung/uftrace">
			      namhyung/uftrace
			    </a>
			  </td>
			  <td class="px-4 py-3 text-sm">
			    2,129
			  </td>
			  <td class="px-4 py-3 text-sm text-gray-400">
			    Function graph tracer for C/C++/Rust
			  </td>
			  <td class="px-4 py-3">
			    <span class="mr-2 px-2 py-1 font-semibold leading-tight text-blue-500 bg-blue-100 rounded-full dark:bg-blue-700 dark:text-blue-100">function</span>
			     <span class="mr-2 px-2 py-1 font-semibold leading-tight text-blue-500 bg-blue-100 rounded-full dark:bg-blue-700 dark:text-blue-100">tracing</span>
			     <span class="mr-2 px-2 py-1 font-semibold leading-tight text-blue-500 bg-blue-100 rounded-full dark:bg-blue-700 dark:text-blue-100">trace</span>
			     <span class="mr-2 px-2 py-1 font-semibold leading-tight text-blue-500 bg-blue-100 rounded-full dark:bg-blue-700 dark:text-blue-100">tracer</span>
			  </td>
			</tr>
		      </tbody>
		    </table>
		  </div>
		</div>
	      </div>
	     
	      <button id="more_button" onclick="more_projs()" class="flex items-center mb-5" style={{justifyContent:"center"}}>
		<svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" style={{width:"2.25rem", height: "2.25rem"}}>
		  <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10" clip-rule="evenodd" fill-rule="evenodd"></path>
		</svg>
	      </button>
{/* 
	      <div x-show="isModalOpen" x-transition:enter="transition ease-out duration-150" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" class="fixed inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center" id="modal_bg" style={{display:"none"}}>
		
		<div x-show="isModalOpen" x-transition:enter="transition ease-out duration-150" x-transition:enter-start="opacity-0 transform translate-y-1/2" x-transition:enter-end="opacity-100" x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0  transform translate-y-1/2" @click.away="closeModal" @keydown.escape="closeModal" class="w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl" role="dialog" id="modal" style={{display:"none"}}> */}
		 
		  {/* <header class="flex justify-end">
		    <button class="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700" aria-label="close" onclick="close_modal()">
		      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" role="img" aria-hidden="true">
			<path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path>
		      </svg>
		    </button>
		  </header>
		  
		  <div class="flex mt-4 mb-6">
		    
		    <svg class="text-red-600 mr-3 ml-3 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" style="height:1.5rem">
		      <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" clip-rule="evenodd" fill-rule="evenodd"></path>
		    </svg>
		    <p class="mb-2 text-lg font-semibold text-red-600">
		      프로젝트는 10개까지 선택이 가능합니다.

		    </p>
		    
		    <p class="text-sm text-red-600">
		    </p>
		  </div>
		  <footer class="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800">
		    <button onclick="close_modal()" class="w-full px-5 py-3 text-sm font-bold leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
		      Cancel
		    </button>
		  </footer> */}
		</div>
	   </div>
	  </div>
	 
   
  </body>      
            
            </>
        )
    }
}


export default Project;