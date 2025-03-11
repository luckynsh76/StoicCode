import { useState, useEffect } from "react";

const stoicQuotes = [
    { quote: "You have power over your mind—not outside events. Realize this, and you will find strength.", author:  "Marcus Aurelius"},
    { quote: "We suffer more often in imagination than in reality.", author: "Seneca"},
    { quote: "The best revenge is not to be like your enemy.", author:  "Marcus Aurelius"},
    { quote: "If it is not right, do not do it; if it is not true, do not say it.", author: "Marcus Aurelius"},
    { quote: "He who fears death will never do anything worth of a man who is alive.", author: "Seneca"},
    { quote: "Man is disturbed not by things, but by the views he takes of them.", author: "Epictetus"},
    { quote: "Wealth consists not in having great possessions, but in having few wants.", author: "Epictetus"},
    { quote: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius"},
    { quote: "No man is free who is not master of himself.", author: "Epictetus"},
    { quote: "It does not matter what you bear, but how you bear it.", author: "Seneca"},
    { quote: "First say to yourself what you would be; and then do what you have to do.", author: "Epictetus"},
    { quote: "Difficulties strengthen the mind, as labor does the body.", author: "Seneca"},
    { quote: "The soul becomes dyed with the color of its thoughts.", author: "Marcus Aurelius"},
    { quote: "To be evenminded is the greatest virtue.", author: "Heraclitus"},
    { quote: "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.", author: "Epictetus"},
    { quote: "Waste no more time arguing what a good man should be. Be one.", author: "Marcus Aurelius"},
    { quote: "A gem cannot be polished without friction, nor a man perfected without trials.", author: "Seneca"},
    { quote: "If you wish to be a writer, write.", author: "Epictetus"},
    { quote: "Luck is what happens when preparation meets opportunity.", author: "Seneca"},
    { quote: "Don’t explain your philosophy. Embody it.", author: "Epictetus"},
    { quote: "The obstacle is the way.", author: "Marcus Aurelius"},
    { quote: "Make the best use of what is in your power and take the rest as it happens.", author: "Epictetus"},
    { quote: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche"},
    { quote: "The greater the difficulty, the more glory in surmounting it.", author: "Epictetus"},
    { quote: "Nothing endures but change.", author: "Heraclitus"},
    { quote: "It is not that we have a short time to live, but that we waste much of it.", author: "Seneca"},
    { quote: "Be tolerant with others and strict with yourself.", author: "Marcus Aurelius"},
    { quote: "To complain is always nonacceptance of what is.", author: "Epictetus"},
    { quote: "Fortune favors the brave.", author: "Seneca"},
    { quote: "Do every act of your life as though it were the last.", author: "Marcus Aurelius"},
    { quote: "Live immediately.", author: "Seneca"},
];

const StoicCodeDaily = () => {
    const [quote, setQuote] = useState ({ quote: "", author: "" });

    useEffect(() => {
        const randomQuote = stoicQuotes[Math.floor(Math.random() * stoicQuotes.length)];
        setQuote(randomQuote);
    }, []);

    return (
        <div className="stoic-daily">
            <h2>Daily Stoic Wisdom</h2>
            <p>"{quote.quote}"</p>
            <p><strong>- {quote.author}</strong></p>
        </div>
    );
};

export default StoicCodeDaily;