# Kailash A. Hambarde

Personal academic website powered by Jekyll and GitHub Pages.

## Run Locally

```bash
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000/`.

## Write a New Blog Post

Do not edit files inside `_site/`. That folder is generated automatically.

Option 1: create a post with the helper:

```bash
ruby bin/new-post "My New Research Note"
```

Then edit the new Markdown file in `_posts/`.

Option 2: copy the template:

```bash
cp _drafts/blog-post-template.md _posts/2026-05-14-my-new-post.md
```

Post files live in `_posts/` and must use this filename format:

```text
YYYY-MM-DD-post-title.md
```

Each post uses Markdown:

```markdown
---
title: "Post Title"
date: 2026-05-14
reading_time: "3 min read"
tags:
  - computer-vision
comments: true
math: true
---

Write the post here.
```

## Images, Math, and Videos

Simple image:

```markdown
![Short image description](/images/your-image.png)
```

Image with caption:

```liquid
{% include figure.html src="/images/your-image.png" alt="Short image description" caption="Figure 1: Short caption." %}
```

Inline equation:

```markdown
The loss is $L = -\sum_i y_i \log(\hat{y_i})$.
```

Display equation:

```latex
$$
L = -\sum_i y_i \log(\hat{y_i})
$$
```

Local video:

```liquid
{% include video.html src="/videos/demo.mp4" type="video/mp4" caption="Short video caption." %}
```

YouTube:

```liquid
{% include youtube.html id="YOUTUBE_VIDEO_ID" title="Video title" caption="Short video caption." %}
```

## Blog Settings

Edit `_data/blog.yml` to change the blog title, description, and comments settings.

Comments and reactions use giscus, which stores comments in GitHub Discussions. To enable it:

1. Enable Discussions in the GitHub repository.
2. Install the giscus GitHub App for this repository.
3. Go to `https://giscus.app/`.
4. Copy `repo_id` and `category_id` into `_data/blog.yml`.
5. Set `comments.enabled` to `true`.

You can disable comments on one post with:

```yaml
comments: false
```

# License
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
