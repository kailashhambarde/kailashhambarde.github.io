---
title: "CityAVOS: A Step Toward Fully Autonomous UAV Visual Search"
date: 2026-05-14
reading_time: "4 min read"
tags:
  - uav
  - embodied-ai
  - computer-vision
  - visual-search
comments: true
math: true
---

I found this paper interesting because it touches a core problem for fully autonomous UAVs: how can a drone search for a visual target in a large, unfamiliar city without GPS-style task hints, hand-written routes, or human guidance?

The paper, **"Towards Autonomous UAV Visual Object Search in City Space: Benchmark and Agentic Methodology"**, introduces **CityAVOS**, a benchmark for aerial visual object search in urban environments, and **PRPSearcher**, an agentic method that combines perception, reasoning, and planning with multimodal large language models.

{% include figure.html src="/images/blog/cityavos/cityavos-task-example.png" alt="Example of the CityAVOS UAV visual object search task" caption="A UAV must search for a visual object in an unfamiliar city scene by balancing exploration with target-driven exploitation." %}

What makes this problem important is that urban UAV autonomy is not only about avoiding obstacles or following waypoints. A real autonomous UAV should understand the city visually: shops, signs, vehicles, buildings, facilities, and the contextual cues around them. If the target is a particular storefront or car, the drone needs to reason about where such an object is likely to appear and when it should keep exploring unknown space.

{% include figure.html src="/images/blog/cityavos/cityavos-dataset.png" alt="CityAVOS object categories and dataset statistics" caption="CityAVOS covers six common urban object categories and separates tasks into easy and hard search settings." %}

The strongest idea in the paper is the separation of the agent into three linked maps:

- an **object-centric semantic map** for what the UAV sees,
- a **cognitive map** that estimates where the target is likely to be,
- an **uncertainty map** that tracks what parts of the city remain unexplored.

This is close to how a human searches: first understand the scene, then guess likely target areas, then deliberately inspect places that remain uncertain.

{% include figure.html src="/images/blog/cityavos/prpsearcher-overview.png" alt="Overview of PRPSearcher for UAV visual object search" caption="PRPSearcher connects spatial perception, target reasoning, and action planning into one UAV search loop." %}

I especially like the exploration-exploitation framing. If a UAV only follows the most likely semantic clue, it may miss the target hidden behind another structure. If it only explores unknown areas, it wastes time. PRPSearcher tries to switch between both modes by using uncertainty as a kind of prompt-level inspiration for planning.

The results are also encouraging. On CityAVOS, PRPSearcher improves over several baselines in success rate, path efficiency, mean search steps, and navigation error. It is still below human performance, but that gap is useful: it shows the benchmark is not saturated and can push future work in embodied AI, UAV navigation, and visual reasoning.

{% include figure.html src="/images/blog/cityavos/prpsearcher-case-study.png" alt="PRPSearcher successful and failed UAV visual search cases" caption="The case study shows both the promise and the difficulty: richer object context helps, while sparse cues can still lead the UAV into inefficient search." %}

For me, the big takeaway is that fully autonomous UAVs will need more than perception models. They need memory, uncertainty, world knowledge, target-specific reasoning, and planning that adapts during flight. CityAVOS is valuable because it turns that need into a measurable benchmark.

This direction feels very relevant for future UAV systems in search-and-rescue, inspection, delivery, and urban monitoring: the drone should not only fly; it should know how to look.
