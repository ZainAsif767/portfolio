export const schemaTypes = [
    {
        name: 'testimonials',
        title: 'Testimonials',
        type: 'document',
        fields: [
            {
                name: 'name',
                title: 'Name',
                type: 'string'
            },
            {
                name: 'company',
                title: 'Company',
                type: 'string'
            },
            {
                name: 'imgurl',
                title: 'ImgUrl',
                type: 'image',
                options: {
                    hotspot: true,
                },
            },
            {
                name: 'feedback',
                title: 'Feedback',
                type: 'string'
            }
        ]
    },
    {
        name: 'abouts',
        title: 'Abouts',
        type: 'document',
        fields: [
            {
                name: 'title',
                title: 'Title',
                type: 'string'
            },
            {
                name: 'description',
                title: 'Description',
                type: 'string'
            },
            {
                name: 'imgUrl',
                title: 'ImgUrl',
                type: 'image',
                options: {
                    hotspot: true,
                },
            },

        ]
    },
    {
        name: 'brands',
        title: 'Brands',
        type: 'document',
        fields: [
            {
                name: 'imgUrl',
                title: 'ImgUrl',
                type: 'image',
                options: {
                    hotspot: true,
                },
            },
            {
                name: 'name',
                title: 'Name',
                type: 'string'
            }
        ]
    },
    {
        name: 'contact',
        title: 'Contact',
        type: 'document',
        fields: [
            {
                name: 'name',
                title: 'Name',
                type: 'string'
            },
            {
                name: 'email',
                title: 'Email',
                type: 'string'
            },
            {
                name: 'message',
                title: 'Message',
                type: 'text'
            }
        ]
    },
    {
        name: 'experiences',
        title: 'Experiences',
        type: 'document',
        fields: [
            {
                name: 'year',
                title: 'Year',
                type: 'string'
            },
            {
                name: 'works',
                title: 'Works',
                type: 'array',
                of: [{ type: 'workExperience' }]
            },
        ]
    },
    {
        name: 'skills',
        title: 'Skills',
        type: 'document',
        fields: [
            {
                name: 'name',
                title: 'Name',
                type: 'string'
            },
            {
                name: 'bgColor',
                title: 'BgColor',
                type: 'string'
            },
            {
                name: 'icon',
                title: 'Icon',
                type: 'image',
                options: {
                    hotspot: true,
                },
            },

        ]
    },
    {
        name: 'workExperience',
        title: 'Work Experience',
        type: 'document',
        fields: [
            {
                name: 'name',
                title: 'name',
                type: 'string'
            },
            {
                name: 'company',
                title: 'Company',
                type: 'string'
            },
            {
                name: 'desc',
                title: 'Desc',
                type: 'string'
            }
        ]
    },
    {
        name: 'works',
        title: 'Works',
        type: 'document',
        fields: [
            {
                name: 'title',
                title: 'Title',
                type: 'string',
            },

            {
                name: 'description',
                title: 'Description',
                type: 'string',
            },
            {
                name: 'projectLink',
                title: 'Project Link',
                type: 'string',
            },
            {
                name: 'codeLink',
                title: 'Code Link',
                type: 'string',
            },
            {
                name: 'imgUrl',
                title: 'ImageUrl',
                type: 'image',
                options: {
                    hotspot: true,
                },
            },

            {
                name: 'tags',
                title: 'Tags',
                type: 'array',
                of: [
                    {
                        name: 'tag',
                        title: 'Tag',
                        type: 'string'
                    }
                ]
            },

        ],
    }
]
