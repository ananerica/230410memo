import Link from "next/link";

export default function Setting() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Setting</h1>;
      <Link href="/route/main">Go Main</Link>
      <Link href="/route/alltrip">Go alltrip</Link>
    </>
  );
}
