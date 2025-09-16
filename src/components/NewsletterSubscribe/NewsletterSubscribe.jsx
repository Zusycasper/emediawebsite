import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Frontend validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: "error", message: "Invalid email" });
      return;
    }

    setStatus({ type: "loading", message: "Processing..." });

    try {
      const res = await fetch("/api/subscribe.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ type: "success", message: data.message });
        setEmail("");
      } else {
        setStatus({ type: "error", message: data.message });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Something went wrong" });
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-2 rounded-md border border-gray-300"
        />
        <Button type="submit" className="bg-[#009BB1] hover:bg-[#B2519A] text-white px-6 py-2">
          Subscribe
        </Button>
      </form>
      {status && (
        <p
          className={
            status.type === "success"
              ? "text-green-600"
              : status.type === "error"
              ? "text-red-600"
              : "text-gray-600"
          }
        >
          {status.message}
        </p>
      )}
    </div>
  );
}
