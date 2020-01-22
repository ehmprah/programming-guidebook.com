---
type: article
title: A Short Introduction to Entity Component System (ECS)
chapter: 5. Paradigms and Patterns
weight: 2
published: true
---

There are a few very simple and sympathetic principles hiding behind the somewhat clunky name Entity Component System. These principles help us to get rid of common pains we have working with object oriented programming or similar paradigms. Entity Component System for example helps us to separate our application data from the logic and prefers simple composition over inheritance and complex object hierarchies. We will discuss these advantages (and mention disadvantages) after a short definition of the paradigm.

## The name says it all

The name Entity Component System already already contains all the necessary ingredients of this paradigm: An *Entity* in this light is nothing more than a container for data; it exists only of a unique ID and can be equipped with *Components*, which will contain the actual data in our application. Our application logic will live in *Systems*, which iterate over our entities and interact with them depending on their components.

We could imagine an application where we have "Humans", which would be entities with an ID and the component "Age" for example. Our "Time" system would then iterate over all entities and increase their age, as you can see in the following very oversimplified example:

```js
const entities = [
  {
    id: 1,
    components: { age: 0 }
  }
];

function time() {
  entities.forEach(entity => {
    if (entity.components.age !== undefined) {
      ++entity.components.age;
    }
  })
}

setInterval(time, 1000);
```

## Data and logic are not birds of a feather

Which is why they should not flock together. Separating our application logic from the data makes our code more clear and much easier to debug, maintain and extend. We don't have to look in all kinds of places to change something: with ECS, our code is very thoroughly organized per se.

Of course you can try and make the least of this paradigm and only write up one monolithic system which contains all of the application's logic instead of profiting from many smaller systems which are responsible for only a few components that belong together – like the "Time"-System in our example, which only takes care of a single component.

But even in that disadvantagous case the separation of data and logic will help us tremendously. Compared to object oriented programming for example, where there are no rules about which object can or cannot contain logic, we tend to abuse this freedom to our own disadvantage: we just put the logic where we think it fits most at the time. In the end we regularly browse through a handful of objects before we finally find the piece of logic we have to touch again when fixing or extending things.

And since the data we're working with are nothing but data, it's very easy to keep or save or export or even manipulate and application state without even having to worry about the logic. I knew about the advantages going into my first ECS project and was still surprised just how tremendously helpful the separation of data and logic is in the daily life of a software developer.

## Composition Over Inheritance

And the separation of data and logic is by no means the only advantage of ECS: at least as helpful and the actual killer feature compared to object oriented programming is the principle of composition. Our entities are "composed" of a particular set of components, which are equal and have no inheritance whatsoever. We are not at risk of getting lost in complex hierarchies simply because all components are equal and can be freely combined into all kinds of "archetypes".

Thus in ECS we're actually getting just a banana if we want a banana – and not the gorilla holding it and the entire jungle (which was Erlang creator Joe Armstrong's humorous criticism of object oriented programming).

The advantage is as follows: If I need a new archetype which has all but one of the components of another archetype, I'll just go ahead, create a copy of this archetype, remove one component and I'm done. If I want to do the same thing in object oriented programming, this simple operation might lead to a huge refactoring of the entire inheritance flow and hierarchical tree of objects: maybe I would not only have to create a new parent for my old and my new object to inherit their shared components from, but also touch and update many more objects down the inheritance chain. We're spared all this trouble in ECS thanks to the simple principle of composition over inheritance.

Of course we don't have that problem in OOP to begin with if we have a perfectly clear hierarchy from the get go – but then again in over ten years of programming, I haven't seen a project where this is the case.

## Where Is the Catch

The advantages of the ECS paradigm are indisputable: but of course there's a catch as well. On the one hand there is performance: Since ECS encourages us to write many small systems which all iterate on potentially huge numbers of entities, we are at risk of writing very inefficient code. Of course there are numerous strategies to solve these problems, but none of them are inherent to the paradigm: you have to find and employ one yourself – which I would clearly state as a disadvantage.

On the other hand the use cases for ECS might be somewhat limited: the paradigm originates from game development, which is also where it is being used most. Usually in most of the applications we develop today we have actions and reactions and just no use for systems which operate on data continuously. But I think that the advantages of ECS can be very valuable for all kinds of applications; in the end you always can cherry-pick what you like about a paradigm without strictly adhering to every rule.

