export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((bubbler) => {
    return {
      params: { id: bubbler.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { bubbler: data },
  };
};

const Details = ({ bubbler }) => {
  return (
    <div>
      <h1>{bubbler.name}</h1>
      <p>{bubbler.email}</p>
      <p>{bubbler.website}</p>
      <p>{bubbler.address.city}</p>
    </div>
  );
};

export default Details;
