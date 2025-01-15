function delayPromise(delay: number, message: string): Promise<string> {
    return new Promise((resolve):number =>
        setTimeout(() => resolve(message), delay)
    );
}

delayPromise(3000, "Сообщение отложено на 3 секунды")
    .then((output) => console.log(output))
    .catch((err) => console.error(err));