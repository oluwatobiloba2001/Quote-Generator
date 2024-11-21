const quotes = [
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    "Happiness is a butterfly, which, when pursued, is always just beyond your grasp, but which, if you will sit down quietly, may alight upon you. – Nathaniel Hawthorne",
    "Count your blessings, not your problems. – Unknown",
    "The greatest happiness is to know the reason of our existence. – Ivan Turgenev",
    "Happiness is not a destination, it's a way of life. – Unknown",
    "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible. – Joel Brown",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "It always seems impossible until it's done. – Nelson Mandela",
    "The difference between ordinary and extraordinary is that little extra. – Jimmy Johnson",
    "Fall seven times, stand up eight. – Japanese Proverb",
]

const usedIndesxes = new Set()
const quoteElement = document.getElementById('quote')

let generateQuote = () => {
    if (usedIndesxes.size == quotes.length) {
        usedIndesxes.clear()
    }
    while (true) {
        const randomIndex = Math.floor(Math.random() * quotes.length);

        if (usedIndesxes.has(randomIndex)) continue

        const quote = quotes[randomIndex];
        quoteElement.innerHTML = quote;
        usedIndesxes.add(randomIndex);
        break;
    }
}
