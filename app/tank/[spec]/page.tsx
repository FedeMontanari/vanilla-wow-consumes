export default function Tank({ params }: { params: { spec: string } }) {
  return <div>{params.spec}</div>;
}
