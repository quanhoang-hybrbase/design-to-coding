# Annotations
[] Backlog
[-] In Progress
[X] Done

# Reminders
- Use theme variables from `global.css` and Tailwind utilities only for styling consistency. Never use arbitrary values.


# Core Components
## 1. Section Title [X]
### Purpose
A reusable component for section headings with optional tagline and description

### Styling 
- gap: 
    - desktop: spacing/4
    - mobile: spacing/3

- Tagline 
    - color: var(--text-sub-600, #525252);
(desktop)
    - font-weight: medium;
    - font-size: 16px;
    - line-height: 150%;
    - text-transform: uppercase;
(Mobile)
    - same as desktop
- Heading
    - color: var(--text-strong-950, #0A0A0A);
    (desktop)
    - font-weight: bold;
    - font-size: 48px;
    - line-height: 120%;
    - HTML tag: h2
    (Mobile)
    - font-size: 36px;

- Description
    - color: var(--text-strong-950, #0A0A0A);
(desktop)
    - font-weight: normal;
    - font-size: 18px;
    - line-height: 150%;
(Mobile)
    - font-size: 16px;

### Props
- Length: Medium/Long
If Long, then: 
    - Heading will be styled with the following values:
        - font-size: 48px; (desktop)

If Medium, then: 
    - Heading will be styled with the following values:
        - font-size: 40px; (desktop)
        

- Alignment: Center/Left
If Center, then: all children will be centered
If Left, then: all children will be left aligned

