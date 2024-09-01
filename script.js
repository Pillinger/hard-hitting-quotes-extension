const quotes = [
    "You don't stop when you're tired, you stop when you're done.",
    "It's time to go to war with yourself.",
    "The only way to guarantee failure is to quit.",
    "Pain is the ultimate teacher. Embrace it.",
    "Your mind is the most powerful tool you have. Master it.",
    "Comfort is the enemy of growth. Get uncomfortable.",
    "The world doesn't care about your excuses. Get after it.",
    "You're capable of 20 times more than you think.",
    "The hardest battle you'll ever fight is the one against yourself.",
    "Suffering is the true test of life.",
    "If you want to be one of the few, you have to do what the few do.",
    "The most important conversations you'll ever have are the ones with yourself.",
    "You have to build calluses on your brain just like you build calluses on your hands.",
    "Life is one big tug of war between mediocrity and trying to find your best self.",
    "Motivation is crap. It comes and goes. When you're driven, whatever is in front of you will get destroyed.",
    "The reason it's important to push hardest when you want to quit the most is because it helps you callous your mind.",
    "You are in danger of living a life so comfortable and soft that you will die without ever realizing your true potential.",
    "The temptation to take the easy road is always there. It is as easy as staying in bed in the morning and sleeping in.",
    "If you can get through doing things that you hate to do, on the other side is greatness.",
    "No one is going to come help you. No one's coming to save you.",
    "You don't stop when you're tired, you stop when you're done.",
    "It's time to go to war with yourself.",
    "The only way to guarantee failure is to quit.",
    "Pain is the ultimate teacher. Embrace it.",
    "Your mind is the most powerful tool you have. Master it.",
    "Comfort is the enemy of growth. Get uncomfortable.",
    "The world doesn't care about your excuses. Get after it.",
    "You're capable of 20 times more than you think.",
    "The hardest battle you'll ever fight is the one against yourself.",
    "Suffering is the true test of life.",
    "If you want to be one of the few, you have to do what the few do.",
    "The most important conversations you'll ever have are the ones with yourself.",
    "You have to build calluses on your brain just like you build calluses on your hands.",
    "Life is one big tug of war between mediocrity and trying to find your best self.",
    "Motivation is crap. It comes and goes. When you're driven, whatever is in front of you will get destroyed.",
    "The reason it's important to push hardest when you want to quit the most is because it helps you callous your mind.",
    "You are in danger of living a life so comfortable and soft that you will die without ever realizing your true potential.",
    "The temptation to take the easy road is always there. It is as easy as staying in bed in the morning and sleeping in.",
    "If you can get through doing things that you hate to do, on the other side is greatness.",
    "No one is going to come help you. No one's coming to save you.",
    "The obstacle is the way.",
    "Embrace the discomfort. It's where transformation happens.",
    "Your mind will give up before your body ever will.",
    "Don't let fear hold you back. Face it head-on.",
    "The only thing standing between you and your dreams is you.",
    "Success is built on a foundation of hard work and sacrifice.",
    "Don't settle for average. Strive for greatness.",
    "The harder the struggle, the more glorious the triumph.",
    "You are stronger than you think. Believe it.",
    "Don't wait for motivation. Create it.",
    "Push beyond your limits. That's where growth lies.",
    "The only way to conquer fear is to face it.",
    "Your potential is limitless. Unleash it.",
    "The pain you feel today will be the strength you feel tomorrow.",
    "Don't let anyone tell you what you can't achieve.",
    "The only bad workout is the one you didn't do.",
    "The only way to do great work is to love what you do.",
    "The difference between ordinary and extraordinary is that little extra.",
    "The mind is a muscle. Train it.",
    "The journey of a thousand miles begins with a single step.",
    "The only thing that matters is what you do next.",
    "Don't be afraid to dream big. Then work even bigger.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The only person you are destined to become is the person you decide to be.",
    "The best revenge is massive success.",
    "Life is not about finding yourself. Life is about creating yourself.",
    "The difference between winning and losing is most often not quitting.",
    "The man who moves a mountain begins by carrying away small stones.",
    "The journey of a thousand miles begins with a single step.",
    "The mind is everything. What you think you become.",
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
    "The mind is the limit. As long as the mind can envision the fact that you can do something, you can do it, as long as you really believe 100 percent.",
    "We can all hit the reset button and start over at any time.",
    "Fall down seven times, stand up eight.",
    "Life is not fair, get over it.",
    "If you want to be uncommon amongst uncommon people, you have to do uncommon things.",
    "It's so easy to be great nowadays because everyone else is weak.",
    "The worst thing that can happen to a man is to become civilized.",
    "The most important conversation is the one you have with yourself.",
    "You have to be willing to go to war with yourself and create a whole new identity.",
    "Talent without work is nothing.",
    "What we do in life echoes in eternity.",
    "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
    "You are what you repeatedly do. Excellence then is not an act but a habit.",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "The only person you are destined to become is the person you decide to be.",
    "Life is not about finding yourself. Life is about creating yourself.",
    "The difference between winning and losing is most often not quitting.",
    "The man who moves a mountain begins by carrying away small stones.",
    "The journey of a thousand miles begins with a single step.",
    "The mind is everything. What you think you become.",
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
    "The mind is the limit. As long as the mind can envision the fact that you can do something, you can do it, as long as you really believe 100 percent.",
    "We can all hit the reset button and start over at any time.",
    "Fall down seven times, stand up eight.",
    "Life is not fair, get over it.",
    "If you want to be uncommon amongst uncommon people, you have to do uncommon things.",
    "It's so easy to be great nowadays because everyone else is weak.",
    "The worst thing that can happen to a man is to become civilized.",
    "The most important conversation is the one you have with yourself.",
]

document.addEventListener('DOMContentLoaded', function() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const quoteScreen = document.getElementById('quote-screen');
    const readyBtn = document.getElementById('ready-btn');
    const quoteElement = document.getElementById('quote');

    readyBtn.addEventListener('click', function() {
        welcomeScreen.style.display = 'none';
        quoteScreen.style.display = 'block';
        generateQuote();
    });

    quoteScreen.addEventListener('click', generateQuote);

    function generateQuote() {
        quoteScreen.style.opacity = 0;
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            quoteElement.textContent = quotes[randomIndex];
            quoteScreen.style.opacity = 1;
        }, 300);
    }
});