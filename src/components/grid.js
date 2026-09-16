import Card from "./card";

export default function Grid({ title, description, category, thumbnail, path, date }) {
  const d = date ? new Date(date) : null;
  const nice = d && !isNaN(d) ? d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : null;
  return (
    <Card
      title={title}
      description={description}
      category={category}
      thumbnail={thumbnail}
      path={path}
      date={nice}
    />
  );
}
