import styles from "../../styles/Bubbles.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { bubblers: data },
  };
};

const Bubblers = ({ bubblers }) => {
  console.log(bubblers);

  return (
    <div>
      <h1>All Bubblers</h1>
      {bubblers.map((bubbler) => (
        <Link href={"/bubbles/" + bubbler.id} key={bubbler.id}>
          <a className={styles.single}>
            <h3>{bubbler.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Bubblers;
