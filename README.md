A bug in Chrome `83.0.4103.61`.

It seems when you have a transition on an element, and you add CSS to change the color, it reverts back to the old color instead:

<img src="repro.gif"/>

