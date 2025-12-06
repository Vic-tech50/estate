import { Link } from '@inertiajs/react';

const TheNavbar = () => {
    return (
        <nav className="flex items-center justify-between bg-gray-900 px-6 py-3 text-white shadow-md">
            {/* Logo */}
            <div className="text-xl font-bold tracking-wide">
                <Link href="/">Custom Layout</Link>
            </div>

            {/* Navigation Links */}
            <ul className="flex space-x-6">
                <li>
                    <Link href="/" className="transition hover:text-blue-400">
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className="transition hover:text-blue-400"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href="/services"
                        className="transition hover:text-blue-400"
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        href="/contact"
                        className="transition hover:text-blue-400"
                    >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Login Button */}
            <Link
                href="/login"
                className="rounded-lg bg-blue-500 px-4 py-2 transition hover:bg-blue-600"
            >
                Login
            </Link>
        </nav>
    );
};

export default TheNavbar;
