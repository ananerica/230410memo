import Link from "next/link";

export default function Alltrip() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">alltrip</h1>
      <Link href="/route/main">Go Main</Link>
      <Link href="/route/setting">Go Setting</Link>
    </>
  );
}
