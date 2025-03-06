# Annotations
[] Backlog
[-] In Progress
[X] Done

# Reminders
- Use theme variables from `global.css` and Tailwind utilities only for styling consistency. Never use arbitrary values.
- Additionally, analyze carefully again the UI and suggest me other UI elements that can be also extracted as reusable core components as well.


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


## 2. Card [X] 
### Purpose
A reusable component for displaying content with image, heading, and description.

### Sub-components Breakdown
This component consist of 3 sub-components:
- Card Image (optional - depends on variant prop's value)
- Card Heading
- Card Content 
- Button (shadcn, optional - depends on the variant prop's value)
- Button Group (core, optional - depends on variant prop's value)
- Card icon (optional - depends on variant prop's value)

### Props (Variants)
variant: v1 | v2 | v3
- v1 (default)
    - Gap
        - desktop: spacing/8
        - mobile: spacing/6
    - Sub-components include:
        - Card Image
            - aspect ratio: 1:1
            - rounded 3xl
            - use the placeholder image located at public/assets/placeholder-image.png
        - Card Heading
            - default content: "Medium length section heading goes here"
            (desktop)
            - font-weight: semi bold;
            - font-size: 24px;
            - line-height: 140%;
            - letter-spacing: 0%;
            - color: var(--text-strong-950, #0A0A0A);
            (mobile)
            - mobile: font-size: 20px;
        - Card Content 
            - color: var(--text-strong-950, #0A0A0A);
            - default content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
            (desktop)
            - font-weight: regular;
            - font-size: 16px;
            - line-height: 150%;
            - letter-spacing: 0%;
            (mobile)
            - same as desktop
- v2
    - Sub-components include:
        - Card Image
            - aspect ratio: 4:3
        - Card Heading
        - Card Content 
        - One Link Button
            - Has trailing icon 
            - Icon: chevron-right
- v3
    - Gap
        - mobile & desktop: spacing/6
    - Sub-components include:
        - Card Icon
            - use the placeholder icon located at public/assets/icon-placeholder.svg
            - Size: 48px x 48px
        - Card Heading
            (desktop)
            - font-weight: semi bold;
            - font-size: 32px;
            - line-height: 130%;
            - letter-spacing: 0%;
            (mobile)
            - font-size: 24px;
            - line-height: 140%;
            - letter-spacing: 0%;
        - Card Content 
        - Button Group (core)
            - One Outline button 
            - One Link button with trailing icon
                - Icon: chevron-right
    

## 3. Feature Section [] 
### Purpose
A section template to display a list of key features in grids

### Sub-components Breakdown
This component consist of 3 sub-components:
- Section Title (core)
- Feature Gallery
- Button Group (core, optional)

### Props (Variants)
variant: v1 | v2 | v3
- v1 (default)
    - Gap
        - desktop: spacing/16
        - mobile: spacing/14
    - Padding X 
        - desktop: spacing/16
        - mobile: spacing/5
    - Padding Y 
        - desktop: spacing/28
        - mobile: spacing/16
    - Sub-components include:
        - Section Title
            - Length: Medium
            - Alignment: Center
        - Feature Gallery
            (Desktop)
            - gap: spacing/7
            - grid 3 columns of the Card component (core, v1)
            (Mobile)
            - gap: spacing/10
            - grid 1 column of the Card component (core, v1)
        - Button Group
            - Default button
            - Link button no icon
            - On mobile the button width filled the container
    
- v2
    - Sub-components include:
        - Section Title
            - Length: Long
            - Alignment: Center
            - No tagline, no description text
        - Feature Gallery
           - Use Card component v2
- v3
    - Sub-components include:
        - Section Title
            - Length: Medium
            - Alignment: left
            - Has tagline, no description text
        - Feature Gallery
           - Use Card component v3