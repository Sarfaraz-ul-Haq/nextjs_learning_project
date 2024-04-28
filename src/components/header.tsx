import Link from "next/link";
import BackButton from "./back_button";

function Header() {
  return (
    <div className="flex gap-7 px-5 py-3 bg-gray-200">
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/dashboard/settings">Settings</Link>
      <Link href="/dashboard/analytics">Analytics</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact_us">Contact Us</Link>
      <Link href="/learn_react">Learn React</Link>
    </div>
  );
}

export default Header;




