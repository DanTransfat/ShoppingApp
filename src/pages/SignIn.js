import React from "react";
import SignInComp from "../components/SignInComp";
import { useEffect } from "react";

const SignIn = () => {

    const fetchPosts = () => {
      fetch('https://w414ifvjhg.execute-api.us-east-2.amazonaws.com/prod/persons')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
    }

    useEffect(() => {
      fetchPosts()
    }, []);
    return (
        <div>
            <SignInComp></SignInComp>
        </div>
    );
};

export default SignIn;