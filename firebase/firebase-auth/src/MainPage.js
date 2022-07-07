import React from "react";
import './App.css';
import Github from "./images/github.png";
import Logo from "./images/find_geeks_logo.png";
import {useUserContext} from "./context/userContext"

const MainPage = () => {

    // gitLogin = () =>{
    // window.open("https://linuxgeek.firebaseapp.com/__/auth/handler", "_self"); };

    const {signInWithGithub} = useUserContext();

    return (
        <> < head > <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Find Geeks ! on GitHub</title>
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"/>
        <link rel="stylesheet" href="./App.css"/>
        <script
            src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
            defer="defer"></script>
        <script src="../assets/js/init-alpine.js"></script>
    </head>
    <body>
        <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div
                class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <div class="flex items-center flex-col overflow-y-auto md:flex-row">
                    <div
                        class="p-6"
                        style={{
                            width: '50%'
                        }}>
                        <img
                            aria-hidden="true"
                            class="w-full h-full dark:hidden"
                            src={Logo}
                            alt="Office"
                            style={{
                                width: '70%',
                                marginLeft: '20%'
                            }}/>

                    </div>

                    <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div class="w-full">
                            <div
                                className="loginButton gitgub"
                                onClick={signInWithGithub}
                                style={{
                                    justifyContent: 'center',
                                    width: "80px",
                                    marginLeft: "130px",
                                    marginBottom: "10px"
                                }}>
                                <img src={Github} alt=""/>

                            </div>

                            <label class="block text-sm">
                                <input
                                    class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder="Search for GitHub ID"/>
                            </label>

                            <a
                                class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
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

export default MainPage;