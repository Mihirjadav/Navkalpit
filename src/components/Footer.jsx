export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto p-8 text-neutral flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">
          © {new Date().getFullYear()} Hardware Store • All rights reserved
        </div>
        <div className="text-sm mt-3 md:mt-0">
          Designed with ❤️ • <span className="text-accent">Signal Orange</span>
        </div>
      </div>
    </footer>
  );
}
