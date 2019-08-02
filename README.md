# Javascript Web Animations

Making user interface fun again with Javascript Web Animations.

Since the introduction of CSS3 Animations, the internet is blooming with beautifully illustrated websites that not only provides great look but also amazing interactivity.

The browsing experience were significantly improved when a website is not just plain and dull without any animiations

## Libraries

For demostration purpose, the following 2 libraries.

- [GSAP](https://greensock.com/gsap) (**G**reen**S**ock **A**nimation **P**latform)
- [ScrollMagic.js](https://scrollmagic.io/)

With a brief introduction for the libraries.

GSAP is one the of the most used professional grade animating libraries out there.

It consists of many different libraries for its own uses, however we would be using GSAP's **TweenMax** bundle to tween our web elements in the demo.

TweenMax is the largest bundle as it includes many other GSAP Plugins in one, with the trade off is its bundle size

![TweenMax](/img/gsap.png)

ScrollMagic is a library that helps you easily control animations based on user's current scroll position.

Its also perfect library to pin elements at a specific set of scroll position either for a limited amount of scroll progress or indefinite

### Installation

#### Using CDN

GSAP

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
```

ScrollMagic

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>

<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
```

## Concepts of Animation

Animations are always breakdown into 4 parts

1. Starting Position
2. Ending Position
3. Duration of Animation
4. Timing Function

The Starting Position can be defined in Styling (CSS) or by using GSAP's Animating API.

The Ending Position is where you would like the element to be after the animation has been played, it could also be defined in Styling (CSS) as well.

> They both depends on what method you use in the GSAP library

The Duration defines how long the transition between Starting Position and Ending Position should be.

The Timing function defines the motion of an animation, it is usually defined in a Cubic Beizer Curve.

## How to use TweenMax

TweenMax consist of a few dozens of Tweening Methods that can be found in their [API Docs](https://greensock.com/tweenmax)

However for this showcase I would only explain a few of them and following methods are the most commonly used for tweening

- .from()
- .fromTo()
- .to()
- .staggerTo()
- .staggerFrom()
- .staggerFromTo()

The `.from()` method was usually used to define the starting position of an animation, in this case the end position would be your position in the CSS

```typescript
TweenMax.from(target:Object, duration:Number, vars:Object)
```

The `.to()` method was usually used to define the ending position of an animation, in this case the starting position would be your position in the CSS

```typescript
TweenMax.to(target:Object, duration:Number, vars:Object, position:*) :
```

The `.fromTo()` method was usually used to define **BOTH** the starting and ending position of the animation, in the case any styling pre-defined in your CSS would be temporarily overwritten after the animation playback has started.

```typescript
TweenMax.fromTo(target:Object, duration:Number, fromVars:Object, toVars:Object, position:*)
```

For the `.staggerTo()`, `.staggerFrom()` and `.staggerFromTo()` they work similarly as `.to()`, `.from()` and `.fromTo()`.
However they accept an additional `staggerDuration` args after `vars` as they are mostly used for an Array of DOM Elements, like its name defines, it staggers the animation 1 by 1 throughout the list of DOM Elements.

> Note: The stagger methods are also exclusive to TweenMax bundle only.

## Demo

Open `index.html`
