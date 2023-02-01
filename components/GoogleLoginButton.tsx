import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";

type Props = {};

export default function Login({}: Props) {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <button onClick={() => signInWithGoogle()}>
                Sign In with Google
            </button>
        </div>
    );
}
