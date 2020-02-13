---
type: article
title: Sustainable Software Development
chapter: 7. Sustainability and Health
weight: 0
published: true
---

In our day and age, living on a burning planet, nothing we do should be devoid of environmental awareness and sustainable thinking. This is especially true for software development: because just like any other of our human activities, creating and using software and the devices it is run on has a huge impact on the world we live in – in fact the ICT sector emits more greenhouse gases than the [whole aviation industry](https://www.nature.com/articles/d41586-018-06610-y). But as opposed to many other of our activities, there's basically no awareness for the environmental impact of our digital lives.

For many people it's probably the reverse rather: because we read our news on our phones instead of using paper, we think this is automatically "greener". The bad news: it ain't. The good news: it could be! And that's exactly where you come into play: as a developer, you create software which might be executed thousands or even millions of times. As such, even very little things you do might have an enormous impact on the world at large.

## Sustainability is a mindset

The code which does the most for our environment is the code that's never written or run (at least until our energy is not produced at our planet's peril). Of course we still have to and want to write code, but in order to do the most for our planet, we should write as little code as possible – which should run as efficiently as possible. As such, sustainable software development starts long before we actually start writing code. It's a mindset rather, a way of thinking that should be applied on every project as early as possible.

And the good news: as such it is not an extra chore that you have to do on the side, it's a way of thinking, designing and developing to do more with less. Sustainable software development will not only reduce your software's impact on the environment, it will ...

- increase your productivity
- improve maintainability
- cut development and hosting costs
- improve perforamance and in turn [conversion and sales](https://developers.google.com/web/fundamentals/performance/why-performance-matters)

It's not a coincidence that these arguments sound like a sales pitch: sustainable development is something that we can and should sell to our customers, designers and managers.

## How do we develop sustainably

What we want to achieve with sustainable development is reducing the energy used by our software to a minimum. We want to __use as little CPU time, memory, disk space, read and write operations and network traffic as possible__. There's no single panacea to achieve this goal: sometimes it might make sense to tweak code to decrease the ressources it uses. In other cases it might make sense to find ways to make sure the code doesn't even get executed.

Which is why sustainable software development is a way of thinking and of challenging oneself and one's work: is this the most efficient solution we can think of? Did we think outside the box and try to solve the problem without code? Do we solve our user's problem or do we solve our management's problem? Is this a solution we will tell friends about because we're proud of it?

## A few practical tips

Some of the following examples apply only to web development, but you get the gist: it's about reducing computation time and network traffic. There are many ways to do it.

- __Performance is everything__: Your code should be performance tested and benchmarked.
- __Dark mode__: modern OLED displays only use one sixth of energy using light-on-dark color schemes as opposed to dark-on-light
- __Minimize CI runs__: does your build server need to run on every commit? How about triggering that on Git tags instead?
- __Keep your software up to date__: usually newer versions of software improve performance, so regularly updates frameworks, dependencies, server software etc.
- __Search Engine Optimization__: Keep SEO in mind so users find what they want faster, both on your site and in search engines
- __Caching__: employ caching as much as reasonably possible, why compute the same thing twice?
- __Host in greenest cloud close to your users__: [Google > Azure > AWS](https://www.wired.com/story/amazon-google-microsoft-green-clouds-and-hyperscale-data-centers/)
- __Stay up to date__: the world of software development is constantly changing, and there constantly are improvements, better tools, new ways of doing things
- __There's no silver bullet__: apply sustainable thinking instead of blindly applying solutions

## Links and Sources

- [https://www.smashingmagazine.com/2019/01/save-planet-improving-website-performance/](https://www.smashingmagazine.com/2019/01/save-planet-improving-website-performance/)
- [https://alistapart.com/article/sustainable-web-design/](https://alistapart.com/article/sustainable-web-design/)
- [https://sustainablevirtualdesign.wordpress.com/](https://sustainablevirtualdesign.wordpress.com/)
- [http://worrydream.com/ClimateChange/](http://worrydream.com/ClimateChange/)

<img src="https://vg09.met.vgwort.de/na/0880637dc8d64cd4bc032d1e30762de1" width="1" height="1" alt="">
