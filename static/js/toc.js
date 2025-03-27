class TOC {
  constructor() {
    this.post = document.getElementById("post");
    this.toc = document.getElementById("toc");
    if (!this.post || !this.toc) return;

    this.headings = Array.from(this.post.querySelectorAll("h1, h2, h3, h4, h5, h6"));
    if (this.headings.length === 0) return;

    this.generateToc();
    this.bindScroll();
  }

  generateToc() {
    const stack = [];
    let html = `
      <div class="toc-content">
        <div class="toc-header">
          <div class="toc-title">目录</div>
        </div>
        <ol>
    `;
    let prevLevel = 1;

    this.headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      const id = this.generateId(heading);
      heading.id = id;

      if (level > prevLevel) {
        html += "<ol>";
        stack.push(level);
      } else if (level < prevLevel) {
        while (stack.length && stack[stack.length - 1] >= level) {
          stack.pop();
          html += "</ol>";
        }
      }

      html += `<li><a href="#${id}">${heading.textContent}</a></li>`;
      prevLevel = level;
    });

    while (stack.length) {
      stack.pop();
      html += "</ol>";
    }

    html += "</ol></div>";
    this.toc.innerHTML = html;
  }

  generateId(heading) {
    return heading.textContent
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\u4e00-\u9fa5-]/g, "");
  }

  bindScroll() {
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.updateActiveHeading();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  updateActiveHeading() {
    const scrollPos = window.scrollY;
    let current = null;

    for (const heading of this.headings) {
      if (heading.offsetTop <= scrollPos + 100) {
        current = heading;
      } else {
        break;
      }
    }

    if (current) {
      this.toc.querySelectorAll("a").forEach((a) => {
        a.parentElement.classList.remove("active");
        if (a.getAttribute("href") === `#${current.id}`) {
          a.parentElement.classList.add("active");
        }
      });
    }
  }
}
