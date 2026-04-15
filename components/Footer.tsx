
import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full border-t border-[var(--foreground)]/10 mt-10">
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Left */}
                <p className="text-sm text-[var(--foreground)]/60">
                    © {new Date().getFullYear()} All rights reserved.
                </p>

                {/* Center */}
                <p className="text-sm text-[var(--foreground)]/80">
                    Developed by{" "}
                    <span className="font-semibold">Shailesh Maurya</span>
                </p>

                {/* Right - Social Icons */}
                <div className="flex items-center gap-5 text-lg">

                    <Link
                        href="https://www.linkedin.com/in/shailesh-maurya-b33643268"
                        target="_blank"
                        className="hover:text-blue-500 transition transform hover:scale-110"
                    >
                        <FaLinkedin />
                    </Link>

                    <Link
                        href="https://www.instagram.com/shailesh_maurya54"
                        target="_blank"
                        className="hover:text-pink-500 transition transform hover:scale-110"
                    >
                        <FaInstagram />
                    </Link>

                </div>
            </div>
        </footer>
    );
}