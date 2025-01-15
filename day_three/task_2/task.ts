async function fetchData(url: string): Promise<any> {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const result:any = await response.json();
            return result;
        }

        throw new Error(`Ошибка: Код ${response.status}, текст: ${response.statusText}`);
    } catch (err) {
        console.error("Ошибка при загрузке данных:", err instanceof Error ? err.message : String(err));
        return null;
    }
}

(async () => {
    const apiURL = "https://jsonplaceholder.typicode.com/posts/70";
    const result = await fetchData(apiURL);

    console.log(result ? `Данные загружены: ${JSON.stringify(result)}` : "Не удалось загрузить данные.");
})();