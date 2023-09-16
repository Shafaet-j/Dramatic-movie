import React from "react";
import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#161214]">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-10 sm:px-6 lg:px-8">
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-100">English</p>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-100">Navigation</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-400 transition hover:text-gray-400/75"
                  href="/"
                >
                  Web Development
                </a>
              </li>

              <li>
                <a
                  className="text-gray-400 transition hover:text-gray-400/75"
                  href="/"
                >
                  Web Design
                </a>
              </li>

              <li>
                <a
                  className="text-gray-400 transition hover:text-gray-400/75"
                  href="/"
                >
                  Marketing
                </a>
              </li>

              <li>
                <a
                  className="text-gray-400 transition hover:text-gray-400/75"
                  href="/"
                >
                  Google Ads
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-100">Legal</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-400 transition hover:text-gray-400/75"
                  href="/"
                >
                  Online Guides
                </a>
              </li>

              <li>
                <a
                  className="text-gray-400 transition hover:text-gray-400/75"
                  href="/"
                >
                  Conference Notes
                </a>
              </li>

              <li>
                <a
                  className="text-gray-400 transition hover:text-gray-400/75"
                  href="/"
                >
                  Forum
                </a>
              </li>

              <li>
                <a
                  className="text-gray-400 transition hover:text-gray-400/75"
                  href="/"
                >
                  Downloads
                </a>
              </li>

              <li>
                <a
                  className="text-gray-400 transition hover:text-gray-400/75"
                  href="/"
                >
                  Upcoming Events
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-100">Talk To Us</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-400 transition hover:text-gray-400/75"
                  href="/"
                >
                  FAQs
                </a>
              </li>

              <li>
                <a
                  className="text-gray-400 transition hover:text-gray-400/75"
                  href="/"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-100">Follow us</p>

            <div className="mx-auto mt-8 flex items-center gap-4 cursor-pointer">
              <FaGoogle />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6">
          <p className="text-center text-sm text-gray-100">
            Copyright &copy; 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
