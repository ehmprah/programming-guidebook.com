---
type: article
title: How to comment code
chapter: 3. Tools of the trade
weight: 0
published: true
---

How to comment code is certainly up for discussion. There is not one proper way but several different approaches which all have their pros and cons. But it most definitely makes sense to comment code with the aim of making it more readable and understandable, no matter which way you choose.

Even if the code you write will never be read, understood or changed by another programmer it might just happen that you have to touch it again yourself one day. Even if you've known this code in and out at the time you were working on it does not mean you still do after a few months.

Of course you'll find your way around code which is badly commented or not at all. It's just that having to do that unnecessarily eats up time which you could have used for more useful things than trying to understand cryptic code, even if it's your own.

## Documentation and clarification comments

There's two kinds of comment that you'll see or write: documentation and clarification comments. The former have certain formal requirements and are used to automatically generate a documentation from the code. Everything else we call clarification comments, which is what I mean with comments below and will focus on for brevity's sake.

## The best comment is the one you don't have to write

You can most definitely overdo comments. Nobody wants to read whole novels above a few lines of code – in that case it would be easier to just read and understand the code itself. Generally you should try to write code in a descriptive, self-documenting way. The name of a function for example should tell you what the function does. That way you can understand a function call in context without having to find the function and read its code in order to understand the code you were actually looking at.

Accordingly variable names should describe what values they're holding. Comments shouldn't repeat or paraphrase what the code does:

```js
// The first variable is a loaded user
const first = load(id);
```

The comment here in unnecessary and does what descriptively written code could do on its own:

```js
const user = loadUser(userId);
```

## Comment a little as possible but as much as required

When you write self-documenting code, you will need fewer comments. This makes your code shorter and clearer. The less code and comments you have to read, the better. But it just does not work without them: comments can explain your intentions. They can explain relations between different sections of code. They can justify exceptions and unexpected quirks. Combined with self-documenting code, cleverly used comments will make finding your way around code a breeze – for yourself and others.

## Comment perfection is in iteration

Just like your code your comments will get better with each iteration; while writing code, it usually makes sense to you, the context and relations are clear, the big picture is in your head anyway. Which is why it's very hard to properly comment code while writing it. It helps imagining that you're seeing this code for the first time to better comment it – but forgetting all your implicit knowledge just does not work.

That's why comments will become really good only after your second and third iteration over the code. So each time you do iterate, always have the comments in mind, too. Do your easily find your way around the code? Everything clear and self-explanatory? If you have to think everything through first, before you can work on the code, new or better comments would help so you don't have to do that again next time.

## Summary

After functionality, readability and understandability should be king when writing code. To write understandable, clear and well-commented code is an art und you'll get better with each line of code you write.

- try to write as little code and comments as possible
- try to write descriptive, self-documenting code
- write comments if the code itself is not self-explanatory enough
- write comments to explain relations and the big picture
- write comments to explain quirks and exceptions
- try to improve your comments with each iteration


<img src="https://vg09.met.vgwort.de/na/3c261dab382446a38a843ea0702623e9" width="1" height="1" alt="">
