export const checkAuth = (login, password, go) => {
    const isLogged = login == 'admin' && password == 'password';
    if (isLogged)
    {
        go();
    };
};