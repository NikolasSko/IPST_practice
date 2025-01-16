interface People {
    name: string;
    email: string;
    isActive: boolean;
}

async function cleanUserData(users: People[]): Promise<People[]> {
    if (Math.random() < 0.1) throw new Error("Произошла ошибка");

    return users
        .filter(user => user.isActive)
        .map(user => ({
            ...user,
            name: user.name.trim().toLowerCase(),
            email: user.email.toLowerCase(),
        }));
}

(async () => {
    const users: People[] = [
        { name: " Иван ", email: "John@mail.com", isActive: true },
        { name: " Борис ", email: "Borya@mail.ru", isActive: false },
        { name: " Максим ", email: "maxxx@mail.com", isActive: true },
        { name: " Юлия ", email: "julia@mail.ru", isActive: false },
        { name: " Наталья ", email: "Natali@mail.com", isActive: true },
    ];

    try {
        const result = await cleanUserData(users);
        console.log(result);
    } catch (error) {
        console.error("Ошибка:", error);
    }
})();