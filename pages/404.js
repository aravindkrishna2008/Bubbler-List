import Link from "next/link";
import { useEffect } from "react";
import {useRouter} from 'next/router'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() =>{
            router.push('/')
        }, 3000)
    }, [])

  return (
    <div className="not-found">
      <h1>Ooooooops....</h1>
      <h2>The page you are looking for has been lost in the Bubble network</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
