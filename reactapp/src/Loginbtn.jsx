import React from "react";
import styled from "styled-components";

const LoginBtn = () => {
    const loginUri = 'https://github.com/login/oauth/authorize?client_id=882c7fbb2c8954d585d4&scope=repo:status read:repo_hook user:email&redirect_uri=http://localhost:3000/callback';

    return (
        <>
          <GithubBtn href= {loginUri}></GithubBtn>        
        </>
    )

}

const GithubBtn = styled.a`

`;


export default LoginBtn;