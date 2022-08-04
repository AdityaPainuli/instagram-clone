import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

function signIn({ providers }) {
  return (
    <>
      <Header searchShow={false} />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/15/01/29/instagram-1594387_960_720.png"
          className="w-80"
          alt="instagram-logo"
        />
        <p className="italic text-lg">
          This app is only for educational purposes only created by
          <span className="font-bold"> Aditya Painuli</span>
        </p>
        <div className="mt-10">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
                className="p-3 bg-blue-500 rounded-lg text-white"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
// MiddleServer
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
export default signIn;
