import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";
import { useSession } from "next-auth/react";

const Stories = () => {
  const [suggestion, setSuggestion] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    const suggestion = [...Array(20)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      userName: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.internet.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      id: i,
    }));

    setSuggestion(suggestion);
  }, []);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story
          key={session.user.userId}
          img={session.user.image}
          username={session.user.username}
        />
      )}
      {suggestion.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.userName}
        />
      ))}
    </div>
  );
};

export default Stories;
