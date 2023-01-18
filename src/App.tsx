import { createContext, useContext } from "react";
import { User } from "@firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivateRoutes from "./components/PrivateRoutes";
import LoginPage from "./pages/LoginPage";

interface TAuthContext {
    user: User | null | undefined;
    loading: boolean;
    error: Error | undefined;
}

const AuthContext = createContext<TAuthContext | null>(null);

export function useAuth() {
    return useContext(AuthContext);
}
function App() {
    const [user, loading, error] = useAuthState(auth);
    const AuthObject: TAuthContext = {
        user,
        loading,
        error,
    };
    if (loading) return <div>Loading...</div>;
    console.log(user);
    return (
        <AuthContext.Provider value={AuthObject}>
            <BrowserRouter>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route path="/" element={<HomePage />} />
                    </Route>
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
