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
                imageSrc: '/nav/buttom_candidates/leading.jpg',

            },
            {
                name: "Trending",
                href: '#',
                imageSrc: '/nav/buttom_candidates/miss.jpg',

            },
            {
                name: "on the rise",
                href: '#',
                imageSrc: '/nav/buttom_candidates/winning.jpg',

            }

        ]
    }
 ]