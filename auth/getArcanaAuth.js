import { AuthProvider } from "@arcana/auth";

const auth = new AuthProvider("1dcce7281c2a43270efa25185fc4b94bd10a37b2", {
  theme: "light",
  position: 'left'
});

const getAuth = () => {
  return auth;
};

export { getAuth };