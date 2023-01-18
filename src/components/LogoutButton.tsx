import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase";

type Props = {};

export default function Logout({}: Props) {
    const [signOut, loading, error] = useSignOut(auth);
    return (
        <div>
            <button onClick={() => signOut()}>Sign Out</button>
        </div>
    );
}
