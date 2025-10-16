import { auth } from "@/auth";
import SignInBox from "@/components/SignInBox/SignInBox";
import SignOutButton from "@/components/SignOutButton/SignOutButton";

const Home = async () => {
  const session = await auth()
  console.log(session)

  return (
    <div>
      <h1>Page Contents</h1>
      <p>Welcome {session?.user.name ?? "Foo"}!</p>
      <SignInBox />
      <SignOutButton />
    </div>
  );
};

export default Home;
