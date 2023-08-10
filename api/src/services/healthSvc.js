const HealthSvc = () => {
    const ping = async () => {
        return { status: "OK" };
    };
  
    const healthCheck = async () => {
        // TODO: check db connections, blockchain etc...
        return { status: "NOK" };
    };
    
    return {
        ping,
        healthCheck,
    };
  };
  
  export { HealthSvc };
  