import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
    const params = useParams();
    console.log(params);

    function UserProfile() {
        return (
            <>
                <header>
                    <NavBar />
                </header>
                <main>
                    <h1>User Profile</h1>
                </main>
            </>
        );
    };
}

export default UserProfile;