---
title: "Your Blog Post Title"
date: 2026-05-14
reading_time: "3 min read"
tags:
  - computer-vision
  - person-re-identification
comments: true
math: true
---

Write your post here in Markdown.

## Section Title

You can use normal Markdown:

- bullet points
- links like [Google Scholar](https://scholar.google.com/)
- images from the `images/` folder

## Images

Simple Markdown image:

```markdown
![Short image description](/images/your-image.png)
```

Image with caption:

```liquid
{% include figure.html src="/images/your-image.png" alt="Short image description" caption="Figure 1: Short caption." %}
```

## Math

Inline math works like `$E = mc^2$`.

Display math:

```latex
$$
L = -\sum_i y_i \log(\hat{y_i})
$$
```

Set `math: false` in the front matter if a post does not need equations.

## Videos

Local video from a `videos/` folder:

```liquid
{% include video.html src="/videos/demo.mp4" type="video/mp4" caption="Short video caption." %}
```

YouTube:

```liquid
{% include youtube.html id="YOUTUBE_VIDEO_ID" title="Video title" caption="Short video caption." %}
```

```python
print("code blocks work too")
```

To publish, copy this file into `_posts/` and rename it like:

`2026-05-14-your-post-title.md`
