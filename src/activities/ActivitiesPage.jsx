import useQuery from "../api/useQuery";

export default function ActivitiesPage() {
  const { data } = useQuery("/activities");

  console.log(data);
  return (
    <>
      <h1>Activities</h1>
      <p>Imagine all the activities!</p>
      <ul>
        {data?.map((element) => (
          <li key={element.id}>{element.name}</li>
        ))}
      </ul>
    </>
  );
}
