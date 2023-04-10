import Link from "next/link";

export default function Signup() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Main</h1>;
      <Link href="/route/alltrip">Go alltrip</Link>
      <Link href="/route/setting">Go Setting</Link>
    </>
  );
}
