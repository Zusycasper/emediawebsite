import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState(""); // hidden bot trap
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // "error", "success", "info"
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setStatus("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost/xampp/reactcrudphp/api/subscribe.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, honeypot }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage(data.message); // "Check your email to confirm"
        setStatus("info");
        setEmail(""); // clear input
      } else {
        setMessage(data.message);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong. Please try again later.");
      setStatus("error");
    }

    setLoading(false);
  };

  // Helper for color based on status
  const getMessageColor = () => {
    switch (status) {
      case "success":
        return "text-green-400";
      case "error":
        return "text-yellow-300";
      case "info":
        return "text-yellow-300";
      default:
        return "text-white";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md">
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
          required
        />
        <Button type="submit" className="bg-gray-700 hover:bg-gray-600 text-white px-6" disabled={loading}>
          {loading ? "Submitting..." : "Subscribe now"}
        </Button>
      </div>

      {/* Honeypot field */}
      <input
        type="text"
        style={{ display: "none" }}
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        autoComplete="off"
      />

      {/* Toast-style message */}
      {message && (
        <p className={`mt-2 text-sm font-medium ${getMessageColor()}`}>
          {message}
        </p>
      )}
    </form>
  );
}

export default NewsletterForm;
