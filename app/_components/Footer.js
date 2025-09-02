import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-fg text-white pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 gap-y-4">
        <div className="flex items-center justify-center">
          <div>
            <h3 className=" text-xl text-white tracking-[0.1rem]  flex items-center gap-1 uppercase font-heading">
              SKY|RESERVE
            </h3>
            <div className="flex gap-5 justify-center md:justify-start mt-2 text-fg-faint">
              <Link
                href="https://www.facebook.com/"
                className="hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://x.com/"
                className="hover:text-white"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/"
                className="hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center md:text-start text-center">
          <ul className="space-y-4 text-small text-fg-faint">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>

            <li>
              <Link href="/flights" className="hover:text-white">
                Flights
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center md:text-start text-center">
          <ul className="space-y-4 text-small text-fg-faint">
            <li>
              <Link href="/privacypolicy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/termsofservices" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center md:text-start text-center">
          <div className="space-y-4 text-small text-white">
            <h4 className="h4 font-semibold">Contact Us</h4>

            <Link
              href="https://mail.google.com/mail/u/0/#inbox"
              className="hover:text-white text-fg-faint"
            >
              sky|reserve@gmail.com
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-stroke-faint pt-6 text-center  text-small text-fg-faint">
        © 2025 SKY|RESERVE. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
