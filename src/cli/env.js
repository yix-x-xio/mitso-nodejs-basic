const parseEnv = () => {
    const result = Object.entries(process.env)
        .filter(([key]) => key.startsWith('MITSO_'))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');
    if (result) {
        console.log(result);
    }
};

parseEnv();