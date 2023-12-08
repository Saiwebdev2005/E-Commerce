import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-8 py-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-3 md:grid-cols-3 gap-8">
        <div>
          <h6 className="font-semibold text-lg mb-2">About Us</h6>
          <ul>
            <li><Link href="/about"><span className="text-sm cursor-pointer">Our Story</span></Link></li>
            <li><Link href="/careers"><span className="text-sm cursor-pointer">Careers</span></Link></li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold text-lg mb-2">Customer Service</h6>
          <ul>
            <li><Link href="/contact"><span className="text-sm cursor-pointer">Contact Us</span></Link></li>
            <li><Link href="/faq"><span className="text-sm cursor-pointer">FAQ</span></Link></li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold text-lg mb-2">Follow Us</h6>
          <ul>
            <li><Link href="https://www.facebook.com/"><span className="text-sm cursor-pointer" target="_blank" rel="noopener noreferrer">Facebook</span></Link></li>
            <li><Link href="https://www.instagram.com/"><span className="text-sm cursor-pointer" target="_blank" rel="noopener noreferrer">Instagram</span></Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
