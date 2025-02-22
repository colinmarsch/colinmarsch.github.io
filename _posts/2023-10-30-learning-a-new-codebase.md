---
layout: post
title: Learning a New Codebase
tags: new-grad career internship
---

In June of this year I gave a talk at Droidcon SF titled ["Navigating the Unknown: Tips for Efficiently Learning a New Codebase"](https://colinmarsch.ca/talks#droidcon-sf-2023). This is the (long overdue) blog post
version of that talk. I'm going to walk through my approach for diving into a new codebase and then cover some next steps that I've found help me after I have
developed a good grasp of the codebase I am working in. Just a small note before jumping in: by "codebase" I'm generally referring to any logical area that a 
single team might own in a large tech company. If you work on a smaller project, this could mean the codebase in it's entirety, but it doesn't have to.

## Some brief background
For the last ~2.5 years, I've been an Android engineer at Cash App on three different teams. Before that I was in university, where I had the opportunity to take part in six internships. Throughout 
all of these experiences I had to get up to speed fast to be able to make the impact that I wanted. As I grew, I realized that my perspective towards how I learned
new codebases changed and I started to see the importance of understanding how the ticket I was working on fit within the broader picture. These are some of the approaches 
that I know now that I wish I incorporated earlier on in my career.

# My approach

## Ask for a code walkthrough
Your teammates who already understand the codebase are your best resource. Asking them to walk you through the codebase overall or through particularly tricky parts is 
incredibly valuable. The earlier you can do this when joining a new team, the better. I used to try to learn a new codebase entirely on my own and I found that I would tend to 
just pick a direction to investigate and dive in to as many files as I could find. It felt like I was making progress, but often the part that I really needed to 
understand was just off the path I had taken. Your teammates can act as guides to point you in the right direction and increase the pace of your learning.

## Create an architecture diagram
Creating an architecture diagram is something that I found really helped me understand how all the disparate pieces of the codebase fit together. Even if there is one
already created for your codebase, going through the exercise of trying to make one on your own is a good way to fully grasp how everything connects. I've found that
many times when starting work on a new feature, having done this exercise in the past really helped me understand how my work could best be built into the codebase.

## Use a debugger
Most people just use a debugger for debugging an issue they are experiencing, however I also like to use a debugger to help understand the fine details of particularly
complex code. There have been many times when using a debugger lead to me to the realization that my assumptions about how a specific piece of logic worked were flawed. Often
times things are more complex than I originally thought and using a debugger forces you to face that reality head on.

# What next?
After developing an understanding of a codebase, I realized steps must be taken to ensure that my time spent learning makes an impact on my team, company and career. 

## Write a doc
Writing a doc is one of the best things to do after you have a solid understanding of a new codebase. This document can serve as a tool for learning for not just yourself, but
also your current teammates and any new hires who will onboard onto your codebase in the future. My main tip is to focus on writing the doc that you wish you had when you were 
onboarding. It can include things like the architecture diagram mentioned earlier and more specific descriptions of how complex parts of your codebase work.

## Refactor?
As the person who likely has the most recent understanding of the codebase overall, you are in a good position to propose refactors to simplify things for engineers who will 
need to understand and make changes in the future. Before making any large sweeping changes, however, it's always good to ensure you understand the
reasons why things are the way they are. There may be historical context that is impossible to uncover from the codebase itself!

## Find opportunities
Lastly, understanding your codebase broadly puts you in a good position to be able to find opportunities to solve problems that might be widespread or only noticeable when taking
a step back to look at the entire system. Finding these opportunities can take different forms depending on the culture and structure of your organization, but don't be shy to
make proposals that expand your scope beyond your usual day to day work. As you move into more senior engineering levels, expanding beyond your project's (or even your team's)
scope becomes more desirable and I believe this increase in scope is incredibly hard to acheive if you have not already developed a deep and broad understanding of your codebase.

## The three phases
I see three main phases in learning a new codebase: learn, document and share. Spending the time to learn and understand the codebase you work in will always pay off.
Documenting those learnings will help ensure that you will keep those learnings with you for a long time. Sharing your learnings is where the magic happens. It increases not
only your own understanding, but also that of your teammates and maybe even your whole organization.
