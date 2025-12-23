import React, { useState } from "react";

export default function LoginPage({ onSuccess }) {
    const [code, setCode] = useState("");
    const [error, setError] = useState("");

    function submit(e) {
        e.preventDefault();
        setError("");

        // ✅ Demo: Passwort/Code
        if (code === "211020") {
            localStorage.setItem("isAuthed", "1");
            onSuccess();
        } else {
            setError("Dumm??");
        }
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#fff0f3]">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow">
                <h1 className="text-2xl font-semibold mb-2">Login</h1>
                <p className="text-sm text-gray-600 mb-4">Code eingeben (du weißt welchen)</p>

                <form onSubmit={submit} className="space-y-3">
                    <input
                        className="w-full rounded-xl border px-4 py-3 outline-none"
                        placeholder="Code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />

                    {error && <p className="text-sm text-red-600">{error}</p>}

                    <button className="w-full rounded-xl bg-rose-500 text-white py-3 font-medium">
                        Weiter
                    </button>
                </form>
            </div>
        </div>
    );
}
