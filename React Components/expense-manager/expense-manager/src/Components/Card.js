export default function Card(props) {
  const classess = "card " + props.className;

  return <div className={classess}>{props.children}</div>;
}
