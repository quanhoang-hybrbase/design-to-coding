# Convert Figma design system to Tailwind theme variables
Based on `[json-file-path]`, please generate theme variables for `[typography/colors/spacing/border-radius/shadows]` in `app/globals.css` to configure the design system of this project. Prioritize these variables, you can override some previous ones if needed.

## Key Considerations
- Use Tailwind v4's theme variable system (direct CSS variables). Check the doc: https://tailwindcss.com/docs/theme#what-are-theme-variables to understand how to use it
- Follow Tailwind's official namespace conventions
- Maintain existing theme variables that shouldn't be overridden
- Ensure dark mode compatibility if applicable
- IMPORTANT: Preserve the original Figma token values while adopting Tailwind's naming conventions

## Required Steps
1. **Analyze Design Tokens**
   - Parse the provided JSON file to identify all design tokens
   - Map design token names to appropriate Tailwind theme variable names. Look up this doc: https://tailwindcss.com/docs/theme#theme-variable-namespaces to see all available namespaces
   - Note any inconsistencies or missing values that need decisions
   - Ensure font sizes from Figma are preserved exactly as specified in the tokens

2. **Implementation Guidelines**
   - Place all theme variables in the `@theme {}` section
   - Use direct CSS variable values, not references to other CSS variables
   - Use the correct namespaces
        --color-*	Color utilities like bg-red-500, text-sky-300, and many more
        --font-*	Font family utilities like font-sans
        --text-*	Font size utilities like text-xl (NOT --text-size-*)
        --font-weight-*	Font weight utilities like font-bold
        --tracking-*	Letter spacing utilities like tracking-wide
        --leading-*	Line height utilities like leading-tight
        --breakpoint-*	Responsive breakpoint variants like sm:*
        --container-*	Container query variants like @sm:* and size utilities like max-w-md
        --spacing-*	Spacing and sizing utilities like px-4, max-h-16, and many more
        --radius-*	Border radius utilities like rounded-sm
        --shadow-*	Box shadow utilities like shadow-md
        --inset-shadow-*	Inset box shadow utilities like inset-shadow-xs
        --drop-shadow-*	Drop shadow filter utilities like drop-shadow-md
        --blur-*	Blur filter utilities like blur-md
        --perspective-*	Perspective utilities like perspective-near
        --aspect-*	Aspect ratio utilities like aspect-video
        --ease-*	Transition timing function utilities like ease-out
        --animate-*	Animation utilities like animate-spin

3. **Font Size Variable Naming**
   - Use `--text-*` format for font size variables (NOT `--text-size-*`)
   - Example mapping from Figma tokens to Tailwind variables:
     - Font size "12" (0.75rem) → `--text-xs: 0.75rem;`
     - Font size "14" (0.875rem) → `--text-sm: 0.875rem;`
     - Font size "16" (1rem) → `--text-base: 1rem;`
     - Font size "18" (1.125rem) → `--text-lg: 1.125rem;`
     - Font size "20" (1.25rem) → `--text-xl: 1.25rem;`
     - Font size "24" (1.5rem) → `--text-2xl: 1.5rem;`
     - Font size "32" (2rem) → `--text-3xl: 2rem;`
     - Font size "36" (2.25rem) → `--text-4xl: 2.25rem;`
     - Font size "40" (2.5rem) → `--text-5xl: 2.5rem;`
     - Font size "48" (3rem) → `--text-6xl: 3rem;`
     - Font size "56" (3.5rem) → `--text-7xl: 3.5rem;`
   - Add corresponding line height variables:
     - `--text-xs--line-height: calc(1 / 0.75);`
     - `--text-sm--line-height: calc(1.25 / 0.875);`
     - etc.

4. **Code Organization**
   - Group related variables with clear comment headings
   - Arrange variables in a logical order (e.g., smallest to largest for sizes)
   - Include descriptive comments for non-obvious values

5. **Testing Considerations**
   - Verify that component styling uses the theme variables properly
   - Check for any hard-coded values that should use theme variables instead
   - Ensure all components are using the correct variable names (e.g., `text-3xl` not `text-size-3xl`)

## Expected Output
1. Update the `app/globals.css` file with appropriate theme variables
2. Organize the theme variables with clear section comments
3. Maintain compatibility with existing variables and theme structure
4. Preserve the original Figma token values while using Tailwind's naming conventions

## Example Implementation
Refer to this doc: https://tailwindcss.com/docs/theme#default-theme-variable-reference

## Important Notes
- For font sizes, always use `--text-*` format (NOT `--text-size-*`)
- Always preserve the original Figma token values while adopting Tailwind's naming conventions
- Add line height variables for each text size using the format `--text-*--line-height`

# Build Core Component
Create a core section/component from the given image as accurately as possible.

**High level purpose**
This section/component is used to ...

**Figma Values**
Refer to the following figma values for size and spacing details

**Components Breakdown**
Consider break down the given UI into the following sub-components:

Additionally, analyze carefully again the UI and suggest me other UI elements that can be also extracted as reusable core components as well.

**Props**
This core component accepts the following props:

**Variants**
This core component has [XX] variants: v1, v2, v3
The given UI is the [XXX] variant. I will provide the UIs for the others once you completed this variant.

**Assets required**
Please refer to [image-path] to get the assets required for [components]. 
Just use an image placholder if needed


**Interactions / animation**
Given ...
When ...
Then ...

**Accessibility**
Given ...
When ...
Then ...


**Output Review**
Once you completed, display the core component at route "/demo" for review

Now analyze carefully and please provide me your step-by-step game plan to build this core component. It should include:
    - Shadcn Component Breakdown: list of shadcn/ui components used in the layout (e.g. Header, Sidebar, Footer, Content)
    - Components to Create: list of your own suggested components
    - Any suggested dependencies/packages to install
    - Your detailed implementation plan


# Build section template
