import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-c3 text-white px-8 py-12">
      <Link href="/About">
        <div className="max-w-screen-xl mx-auto grid grid-cols-3 md:grid-cols-3 gap-8">
          <div>
            <h6 className="font-semibold text-lg mb-2">About Us</h6>
            <ul>
              <li>
                <span className="text-sm cursor-pointer">Our Story</span>
              </li>
              <li>
                <span className="text-sm cursor-pointer">Careers</span>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-lg mb-2">Customer Service</h6>
            <ul>
              <li>
                <span className="text-sm cursor-pointer">Contact Us</span>
              </li>
              <li>
                <span className="text-sm cursor-pointer">FAQ</span>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-lg mb-2">Follow Us</h6>
            <ul>
              <li>
                <span
                  className="text-sm cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </span>
              </li>
              <li>
                <span
                  className="text-sm cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </footer>
  );
}
