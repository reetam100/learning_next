export default async function HelloPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error("My Error");
  return <div>Hello NextJS 14</div>;
}
