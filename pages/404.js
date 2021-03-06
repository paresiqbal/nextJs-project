import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page cannot be found.</h2>
      <p>
        Go back to
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
