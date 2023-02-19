import React from "react";

const AuthContext = React.createContext(null);

const ProvideAuth = ({ children, provider }) => {
  const auth = useProvideAuth(provider);
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useProvideAuth = (auth) => {
  const [loading, setLoading] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [availableLogins, setAvailableLogins] = React.useState([]);
  const [user, setUser] = React.useState(null);
  const providerRef = React.useRef(auth.provider);

  const loginWithSocial = async (p) => {
    await auth.init();
    await auth.loginWithSocial(p);
  };

  const loginWithLink = async (email) => {
    await auth.init();
    return auth.loginWithLink(email);
  };

  const logout = async () => {
    if (await auth.isLoggedIn()) {
      await auth.logout();
    }
  };

  const connect = async () => {
    return await auth.connect();
  };

  const onConnectHook = async () => {
    setIsLoggedIn(true);
    const info = await auth.getUser();
    setUser(info);
  };

  const onDisconnectHook = () => {
    setIsLoggedIn(false);
  };

  React.useEffect(() => {
    auth.provider.on("connect", onConnectHook);
    auth.provider.on("disconnect", onDisconnectHook);
    auth.init().then(() => {
      setLoading(false);
      auth.isLoggedIn().then((loggedIn) => {
        if (!loggedIn) {
          auth.getLogins().then((logins) => {
            console.log({ logins });
            setAvailableLogins(logins.filter((l) => l != "passwordless"));
          });
        }
        setIsLoggedIn(loggedIn);
      });
    });
    return () => {
      auth.provider.removeListener("connect", onConnectHook);
      auth.provider.removeListener("disconnect", onDisconnectHook);
    };
  }, []);

  return {
    availableLogins,
    loading,
    loginWithLink,
    loginWithSocial,
    logout,
    provider: providerRef.current,
    isLoggedIn,
    user,
    appId: auth.appId,
    connect,
  };
};

const useArcanaAuth = () => {
  const context = React.useContext(AuthContext);
  if (context == null) {
    throw new Error("`useAuth` Hook must be used inside `ProvideAuth`");
  }
  return context;
};

export { useArcanaAuth, ProvideAuth };