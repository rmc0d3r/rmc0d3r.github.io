---
layout: post
title: "Looking Closely at the Velocity of a Body in Free Fall"
date: 2018-02-17
categories: [physics, note]
---
When a body is thrown up with initial velocity $$v_0$$ while under the influence of a constant downward acceleration $$-g$$, it returns to the point of release with velocity $$-v_{0}$$ . This is really interesting because we can throw this body from anywhere and however hard we want but it still comes back with the same magnitude of velocity as we threw it. However on closer analysis of the equations we realize this is no magic.

  Let us assume for simplicity (without loss of generality) that the initial position is $$x_{0}=0m$$ . We are given the initial velocity $$v_{0}$$. Also note that the final position is $$x_{f}=0m$$ because we want to analyze the body when it is back at its initial position. Now using the equation for position at a future time we get,

  $$x=x_{0}+v_{0}t-\frac{1}{2}gt^{2}$$

  Which on simplification gives, 

  $$v_{0}t=\frac{1}{2}gt^{2}$$

  When we solve for $$t$$, we get two answers. One is $$t=0s$$ which represents the time at which the body was released, as even then the position of the body was $$0m$$, ans the other solution is $$t=\frac{2v_{0}}{g}$$ which represents the time at which the body came back to $$0m$$ which is what we are interested in. So $$t_{return}=\frac{2v_{0}}{g}$$.

  Let us now use this to calculate the final velocity of the body when it returns. We know that for constant acceleration the velocity at a future time can be calculated using the equation,

  $$v_{return}=v_{0}-gt_{return}=v_{o}-2v_{0}=-v_{0}$$

  So now we have proved the statement. But why is it so? What is the connection between gravity and the speed at which the body returns to where it was thrown from? Even though we can throw the body from anywhere and with any velocity, $$g$$  controls how much a body should speed up or down in a given interval of time. So it decides when the body should stop , i.e, have zero velocity too. And this in turn decides how high the body goes before the velocity becomes negative and the body starts to fall downwards. 

  We know that at the highest point the velocity of the body will be $$0m/s$$.  The initial velocity was $$v_{0}\ m/s$$. This is for the upward motion. If we take the downward motion to be a completely new problem, then the initial velocity for it is $$0\ m/s$$ and its final velocity is $$-v_{0}\ m/s$$. So they are identical problems. Even the sign resolves itself once we realize that in on case $$(v_{final} - v_{initial})$$ is $$(0 - v_{0}) = -v_{0}$$ and in the other case it is $$(-v_{0} - 0) = -v_{0}$$.  Using the equation,

  $$(v_{final} - v_{initial}) = -v_{0} = -gt$$

  We get the time of both the trips as,

  $$t_{up}=t_{down}=\frac{v_{0}}{g}$$

  which explains why the total time taken for the round trip was twice this.

  Now to finally find the maximum height traveled $$x_{up}$$,

  $$x_{up}=v_{0}t_{up}-gt_{up}^2=\frac{v_{0}^2}{g}-\frac{v_{0}^2}{2g}=\frac{v_{0}^2}{2g}$$

  This equation can be explained as follows,

  $$x_{top}=\frac{v_{0}}{2}. \frac{v_{0}}{g}=\frac{v_{0}}{g}.t_{up}$$

  Recall that in case of constant acceleration, $$v_{avg}=\frac{v_{final}+v_{initial}}{2}$$, which in this case is $$\frac{v_{0}}{2}$$. So,

  $$x_{top}=v_{avg}.t_{up}$$

  So that is it. The maximum distance traveled upwards is the product of average velocity and time taken to reach there. But of course, this is given the constant acceleration. 

  These results can be used more generally : 

  * The position at which we release this body is not special. In fact the whole analysis can be carried out at any point within the trajectory of the body. All we need to know is the velocity of the body at that point, and use it just like we used $$v_{0}$$ above. 

  * The constant acceleration brings out symmetry in free falling objects' trajectories. So the speed at which the body passes a particular point in the trajectory , whether it went up and down, will be the same.

  * Even a body drop problem can be seen as the downward journey discussed above. All we need to know is the final velocity of the body just before it hits the ground. This in turn can be found using other equations.

  ​
