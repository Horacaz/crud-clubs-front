export default function Error(props: { error: Error }) {
  const { error } = props;
  return (
    <>
      <h1>An error has ocurred</h1>
      <p>{error.message}</p>
    </>
  );
}
