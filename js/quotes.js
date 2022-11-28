const quotes = [
    {    quote:" Age is no guarantee of maturity.",
        author:"Lawana Blackwell",
    },
    {    quote:"They must often change who would be constant in happiness or wisdom.",
        author:"Confucius",
    },
    {    quote:"You will face many defeats in life, but never let yourself be defeated.",
        author:"Maya Angelou",
    },
    {    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author:"Nelson Mandela",
    },
    {    quote:"Only I can change me life, no one can do it for me.",
        author:"Carol Burnett",
    },
    {    quote:"Being happy never goes out of style.",
        author:"Lilly Pulitzer",
    },
    {     quote:"All you need in this life is ignorance and confidence, then success is sure.",
        author:"Mark Twain",
    },
    {    quote:"Despite the forecast, live like it’s spring.",
        author:"Lilly Pulitzer",
    },
    {    quote:"Great minds have purposes, others have wishes.",
        author:"Washington Irving",
    },
    {   quote:" No great man ever complains of want of opportunity.",
        author:"Anonymous",
    },
    {   quote:"All we have is now.",
        author:"Anonymous",
    },
    {    quote:"A day without laughter is a day wasted.",
        author:"Anonymous",
    },
    {    quote:"love what you have. ",
        author:"Anonymous",
    },
    {    quote:"Believe in yourself.",
        author:"Anonymous",
    },
    {    quote:"Rome is not built in a day. ",
        author:"Anonymous",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];


quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;