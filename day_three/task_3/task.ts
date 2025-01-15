type User = {
    id: string;
    name: string;
    phone: string;
    email: string;
    location: string;
    status: "активен" | "удален";
};

let idCounter = 1;

const fakeUsers: User[] = [
    {
        id: (idCounter++).toString(),
        name: "Иван Иванов",
        phone: "+123456789",
        email: "ivan.ivanov@example.com",
        location: "Москва",
        status: "активен",
    },
    {
        id: (idCounter++).toString(),
        name: "Мария Петрова",
        phone: "+987654321",
        email: "maria.petrova@example.com",
        location: "Санкт-Петербург",
        status: "удален",
    },
    {
        id: (idCounter++).toString(),
        name: "Алексей Сидоров",
        phone: "+123123123",
        email: "alexey.sidorov@example.com",
        location: "Казань",
        status: "активен",
    },
];

function fakeFetch(url: string, delay: number = 2000): Promise<Response> {
    console.log(`Запрос по адресу: ${url}`);
    return new Promise((resolve) => {
        setTimeout(() => {
            const response = new Response(JSON.stringify(fakeUsers), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
            resolve(response);
        }, delay);
    });
}

async function fetchFakeData() {
    try {
        const response = await fakeFetch("/api/users");
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        const data: User[] = await response.json();
        console.log("Полученные данные:", data);
    } catch (error) {
        console.error("Не удалось получить данные:", error);
    }
}

fetchFakeData();