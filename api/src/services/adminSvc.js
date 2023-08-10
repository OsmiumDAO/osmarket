const AdminSvc = (network = "mainnet") => {
  const getTest = async () => {
    return { test: "test" };
  };

  return {
    getTest,
  };
};

export { AdminSvc };
