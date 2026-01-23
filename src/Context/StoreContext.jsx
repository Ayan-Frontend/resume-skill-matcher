import { createContext, useContext } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const SKILL_DICTIONARY = [
    // Frontend
    { name: "React", aliases: ["react", "reactjs", "react.js", "react js"] },
    { name: "Next.js", aliases: ["next", "nextjs", "next.js", "next js"] },
    { name: "Redux", aliases: ["redux", "redux toolkit", "rtk", "rtk query"] },
    {
      name: "JavaScript",
      aliases: [
        "javascript",
        "js",
        "java script",
        "ecmascript",
        "javascript es6+",
        "javascript es6",
        "javascriptes6+",
        "javascriptes6",
      ],
    },
    { name: "TypeScript", aliases: ["typescript", "ts", "type script"] },
    {
      name: "Tailwind CSS",
      aliases: ["tailwind", "tailwindcss", "tailwind css"],
    },
    { name: "Bootstrap", aliases: ["bootstrap", "boot strap"] },

    // Backend
    { name: "Node.js", aliases: ["node", "nodejs", "node.js", "node js"] },
    {
      name: "Express.js",
      aliases: ["express", "expressjs", "express.js", "express js"],
    },
    { name: "Java", aliases: ["java"] },
    {
      name: "Spring Boot",
      aliases: ["spring boot", "springboot", "spring-boot"],
    },
    { name: "REST API", aliases: ["rest", "rest api", "restful api", "api"] },

    // Databases
    { name: "MySQL", aliases: ["mysql", "my sql"] },
    {
      name: "PostgreSQL",
      aliases: ["postgres", "postgresql", "postgres sql", "postgre sql"],
    },
    { name: "MongoDB", aliases: ["mongodb", "mongo", "mongo db"] },

    // Testing
    { name: "Testing", aliases: ["testing", "test"] },

    // Tools
    { name: "Git", aliases: ["git"] },
    { name: "GitHub", aliases: ["github"] },
    { name: "GitLab", aliases: ["gitlab", "git lab"] },

    // Android / Mobile
    { name: "Android", aliases: ["android"] },
    { name: "Kotlin", aliases: ["kotlin"] },
    { name: "React Native", aliases: ["react native", "react-native"] },
    { name: "Flutter", aliases: ["flutter"] },
  ];

  return (
    <StoreContext.Provider value={{ SKILL_DICTIONARY }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
