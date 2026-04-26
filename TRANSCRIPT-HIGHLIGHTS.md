1. Planning for Week 8 (Session 1, early)
I asked Claude to help me create a technical plan for K‑Bites, even though I already had a plan from Week 7. This mattered because it aligned my transcript with the grading rubric and made sure my build process showed structure and not just coding.
2. Designing the Data Model for Dishes and Ingredients (Session 1, midway)
Claude and I made a data structure for dishes and ingredients, including fields like nameKo, spiceLevel, and tags. This was important because it basically set up the foundation for all my five features and made sure my components could share the same data shape.
3. Setting Up localStorage with a Custom Hook (Session 1, midway)
I worked with Claude to build a useFavorites hook that handled reading, writing, and toggling favorites in localStorage. This was a really important moment because it satisfied the Base Tier persistence requirement that was written in the assignment and simplified the CRUD logic across multiple pages.
4. Debugging the Routing and Component Structure (Session 2)
One issue I apparently ran into was that the images weren't loading because Vite only serves static files from the public/ folder, so I had to move everything into public/images/ and update the DishCard and DishDetail components to use real <img> tags instead of the placeholder divs, which got the photos working correctly throughout the whole app.
