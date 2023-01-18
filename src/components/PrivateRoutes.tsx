import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../App";

export default function PrivateRoutes({ ...rest }) {
    const AuthObject = useAuth();
    return AuthObject?.user ? <Outlet /> : <Navigate to="/login" />;
}
