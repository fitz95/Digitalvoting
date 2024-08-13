 export const PRODUCT_CATEGORIES = [
    {
        label: "Leading Candidates",
        value: "leading_candidates" as const,
        featured: [
            {
                name: "Editor picks",
                href: '#',
                imageSrc: '/nav/leading_candidates/leading.jpg',

            },
            {
                name: "Trending",
                href: '#',
                imageSrc: '/nav/leading_candidates/miss.jpg',

            },
            {
                name: "on the rise",
                href: '#',
                imageSrc: '/nav/leading_candidates/winning.jpg',

            }

        ]
    },
    {
        label: "bottom Candidates",
        value: "bottom_candidates" as const,
        featured: [
            {
                name: "Editor picks",
                href: '#',
                imageSrc: '/nav/buttom_candidates/bestsellers.jpg',

            },
            {
                name: "dissapearing",
                href: '#',
                imageSrc: '/nav/buttom_candidates/new.jpg',

            },
            {
                name: "on the low",
                href: '#',
                imageSrc: '/nav/buttom_candidates/picks.jpg',

            }

        ]
    }
 ]