import Link from 'next/link';

const LinkA = ({ text, path }) => {
  return (
    <Link href={path}>
      <a>
        {text}
        <style jsx>{`
          a {
            display: block;
            width: 40%;
            margin: 20px auto;
            text-align: center;
            text-decoration: none;
            padding: 20px;
            font-size: 2rem;
            color: #fff;
            background-color: #222;
            border-radius: 3rem;
          }
        `}</style>
      </a>
    </Link>
  );
};

export default LinkA;
