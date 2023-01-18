import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../App";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase";

type Props = {};

export default function LoginPage({}: Props) {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate("/");
        return <div></div>;
    }
    return (
        <div>
            <button onClick={() => signInWithGoogle()}>
                Sign In with Google
            </button>
        </div>
    );
}
