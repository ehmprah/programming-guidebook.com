---
type: article
title: When to and When Not to Use Frameworks
chapter: 4. Rookie to Professional
weight: 0
published: true
---

We developers are lazy, like everyone else – and with good reason: why should we make something again that already exists? Frameworks and third party code in general help us to avoid having to start completely from scratch on every project.

They mean less work for us and can bring bring features into our project that we might not be able to implement ourselves. We can learn from frameworks and improve our own code. But we can also contribute our own improvements to many open source frameworks. Sounds good so far - so why not use as many of them as possible?

This probably comes as no surprise, but frameworks have drawbacks: if we use them, we create dependencies and technical debt. In principle, any code you didn't write yourself is a potential security risk (see for example the [Event Stream Incident](https://www.theregister.co.uk/2018/11/26/npm_repo_bitcoin_stealer/)). Therefore we have to keep an eye on security updates for our frameworks in particular.

But even if we regularly install updates: An incompatible update can also mean that we have to adapt the integration everywhere in our code. Furthermore, third party code can unnecessarily inflate our codebase – if we include a huge framework just to use a small function from it for example. And last but not least, frameworks can keep you from developing your programming skills or learning more about your language: jQuery, for example, has long prevented people from learning vanilla Javascript properly. This all sounds bad - so don't use third-party code after all?

As always in life, the right answer is neither black nor white: if used correctly, third-party frameworks and code can not only save time and money, but also make your product and your skills better. If used incorrectly, they can make your work much more difficult or even lead to a security disaster. I would recommend the following basic rule: as much third party code as necessary, but as little as possible.

Being clear about what the pros and cons of frameworks can be is the most important thing and helps to make the right decision in every situation.

## Advantages of frameworks
- We can include features that we could not implement ourselves
- We have to write less code and save time and money
- We can learn from (good) frameworks
- We can even contribute our own improvements to open source frameworks

## Disadvantages of frameworks
- Any third-party code is a potential security risk
- Frameworks need to be updated regularly (and as a result, possibly your code as well)
- Frameworks can bloat your codebase (or application) unnecessarily
- Frameworks can prevent you from improving your skills

As with most things in life, I would recommend to follow the basic rule "as much as necessary, as little as possible" and to use frameworks sparingly, but to definitely use them where they make sense!

<img src="https://vg09.met.vgwort.de/na/297a63b9388246a7a3859ea2719dc901" width="1" height="1" alt="">
