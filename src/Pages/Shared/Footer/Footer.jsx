import React from 'react';
import Logo from '../../../Component/Logo/Logo';
import { Link } from 'react-router';


const Footer = () => {
    const links = <>
        <li><Link>Services</Link></li>
        <li><Link to="/coverage">Coverage</Link></li>
        <li><Link>About Us</Link></li>
        <li><Link>Pricing</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Contact</Link></li>
        </>
    return (
        <footer className="bg-black rounded-2xl text-white py-16 px-10 border-t border-gray-800">
            <div className="max-w-6xl mx-auto text-center">
                {/* Logo */}
                
                <Logo></Logo>

                {/* Tagline */}
                <p className="text-secondary text-base leading-relaxed mb-10 max-w-3xl mx-auto">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-10"></div>

                {/* Navigation Links */}
                <nav className="flex justify-center gap-10 mb-10 flex-wrap">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </nav>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-5 mt-8">
                    <a
                        href="#linkedin"
                        className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center hover:-translate-y-1 transition-transform duration-300"
                        aria-label="LinkedIn"
                    >
                        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>

                    <a
                        href="#twitter"
                        className="w-11 h-11 rounded-full bg-black border-2 border-gray-700 flex items-center justify-center hover:-translate-y-1 transition-transform duration-300"
                        aria-label="X (Twitter)"
                    >
                        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>

                    <a
                        href="#facebook"
                        className="w-11 h-11 rounded-full bg-blue-500 flex items-center justify-center hover:-translate-y-1 transition-transform duration-300"
                        aria-label="Facebook"
                    >
                        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </a>

                    <a
                        href="#youtube"
                        className="w-11 h-11 rounded-full bg-red-600 flex items-center justify-center hover:-translate-y-1 transition-transform duration-300"
                        aria-label="YouTube"
                    >
                        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;