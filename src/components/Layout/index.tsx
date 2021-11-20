import Link from 'next/link';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="container mx-auto px-4">
    <div className="flex justify-between">
      <strong>Qogita</strong>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">
              <a className="underline">Products</a>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <a className="underline">Your Cart</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    {children}
  </div>
);

export default Layout;
