---
type: article
title: Sustainable Software Development
chapter: 7. Sustainability and Health
weight: 0
published: false
---

In our day and age, living on a burning planet, nothing we do should be devoid of environmental awareness and sustainable thinking. This is especially true for software development: because just like any other of our human activities, creating and using software and the devices it is run on has a huge impact on the world we live in – in fact the ICT sector emits more greenhouse gases than the whole aviation industry. But as opposed to many other of our activities, there's basically no awareness for the environmental impact of our digital lives.

For many people it's probably the reverse rather: because we read our news on our phones instead of using paper, we think this is automatically "greener". The bad news: it ain't. The good news: it could be! And that's exactly where you come into play: as a developer, you create software which might be executed thousands or even millions of times. As such, even very little things you do might have an enormous impact on the world at large.

# Sustainability is a mindset

The code which does the most for our environment is the code that's never written or run. Of course we still have to and want to write code, but in order to do the most for our planet, we should write as little code as possible – which should run as efficiently as possible. As such, sustainable software development starts long before we actually start writing code. It's a mindset rather, a way of thinking that should be applied on every project as early as possible.

And the good news: as such it is not an extra chore that you have to do on the side, it's a way of thinking, designing and developing to do more with less. Sustainable software development will not only reduce your software's impact on the environment, it will ...

- increase your productivity
- improve maintainability
- cut development and hosting costs
- improve perforamance and in turn conversion and sales

It's not a coincidence that these arguments sound like a sales pitch: sustainable development is something that we can and should sell to our customers, designers and managers.

# How do we develop sustainably

What we want to achieve with sustainable development is reducing the energy used by our software to a minimum. We want to *use as little CPU time, memory, disk space, read and write operations and network traffic as possible*. There's no single panacea to achieve this goal: sometimes it might make sense to tweak code to decrease the ressources it uses. In other cases it might make sense to find ways to make sure the code doesn't even get executed.

Which is why sustainable software development is a way of thinking and of challenging oneself and one's work: is this the most efficient solution we can think of? Did we think outside the box and try to solve the problem without code? Do we solve our user's problem or do we solve our management's problem? Can we

# A few practical tips

Some of the following examples apply only to web development, but you get the gist: it's about reducing computation time and network traffic. There are many ways to do it.

- *Performance is everything*: Your code should be performance tested and benchmarked
- *Dark mode*: modern OLED displays only use one sixth of energy using light-on-dark color schemes as opposed to dark-on-light
- *Minimize CI runs*: does your build server need to run on every commit? How about triggering that on Git tags instead?
- *Keep your software up to date*: usually newer versions of software improve performance, so regularly updates frameworks, dependencies, server software etc.
- *Search Engine Optimization*: Keep SEO in mind so users find what they want faster, both on your site and in search engines
- *Caching*: employ caching as much as reasonably possible, why compute the same thing twice?
- *Host in greenest cloud close to your users*: [Google > Azure > AWS](https://www.wired.com/story/amazon-google-microsoft-green-clouds-and-hyperscale-data-centers/)
- *Stay up to date*: the world of software development is constantly changing, and there constantly are improvements, better tools, new ways of doing things
- *There's no silver bullet*: apply sustainable thinking instead
of blindly applying solutions

# Links and Sources

- https://www.nature.com/articles/d41586-018-06610-y
- https://www.smashingmagazine.com/2019/01/save-planet-improving-website-performance/
- https://alistapart.com/article/sustainable-web-design/
- https://sustainablevirtualdesign.wordpress.com/
- http://worrydream.com/ClimateChange/
