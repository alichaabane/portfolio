const content = {
    nav: {
        logo: 'Njr',
        links: [
            {text: 'Work', to: 'project'},
            {text: 'Contact', to: 'contact'},
        ],
    },

    header: {
        img:
            'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
        imgPlaceholder:
            'data:image/jpeg;base64,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',
        text: ['Hi!', "It's me Ali Chaabane.", 'I am '],
        typical: [
            'Web and Mobile Developer. 🖥',
            2000,
            'FullStack Developer 🖥',
            2000,
        ],
        btnText: 'Discover More',
    },

    stack: {
        title: 'Technology i use ',
        tech: [
            {
                img: process.env.PUBLIC_URL + '/assets/mongo.png',
                alt: 'mongodb',
            },
            {
                img: process.env.PUBLIC_URL + '/assets/ionic.png',
                alt: 'ionic',
            },
            {
                img: process.env.PUBLIC_URL + '/assets/angular.png',
                alt: 'angular',
            },
            {
                img: process.env.PUBLIC_URL + '/assets/vue.png',
                alt: 'vue',
            },
            {
                img: process.env.PUBLIC_URL + '/assets/logo512.png',
                alt: 'react',
            },
            {
                img: process.env.PUBLIC_URL + '/assets/express.png',
                alt: 'express',
            },
            {
                img: process.env.PUBLIC_URL + '/assets/node.png',
                alt: 'node',
            },
            {
                img: process.env.PUBLIC_URL + '/assets/spring.png',
                alt: 'spring',
            },
        ],
        desc: `For Mobile Development i use Ionic Framework one of the famous cross-platform frameworks to create , run and build a mobile application into Android and iOS even it can made a PWA version for web.
         Also For Web Development i m using currently MEAN (MongoDB Express Angular Node) is one of several variations of the MERN stack (MongoDB Express React Node). Other variants include MEVN (MongoDB, Express, Vue, Node), and really any frontend JavaScript framework can work. Also i m starting currently to learn SpringBoot and dive deep into Java Frameworks
`
    },

    project: {
        title: 'Projects',
        img: process.env.PUBLIC_URL + '/assets/project-mobile.png',
        imgPlaceholder:
            'data:image/png;base64,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',
        projectName: 'Meetup',
        desc: 'Getting Started with Meetup App (my first react project) ',
        website: 'https://meetups-project-86e41.web.app/'
    },

    contact: {
        title: 'Ping Me!',
        desc:
        "Web and Cross platform Developer with a great passion for working in the industry computer software. My skills in native Java, JavaScript (Angular, React,Vue.JS, Node.JS), XML, JSON, MySQL / Oracle Databases also NoSql. Databases such as (MongoDB, CouchDB) and web design. Well-mastered with a bachelor's and basic's degree in computer science with honors.",
        socials: [
            {
                alt: 'facebook',
                img: process.env.PUBLIC_URL + '/assets/facebook.png',
                link: 'https://www.facebook.com/alichaabane11/'
            },
            {
                alt: 'github',
                img: process.env.PUBLIC_URL + '/assets/github.png',
                link: 'https://github.com/alichaabane'
            },
            {
                alt: 'link',
                img: process.env.PUBLIC_URL + '/assets/link.png',
                link: 'https://www.linkedin.com/in/ali-chaabane/'
            },
            {
                alt: 'gmail',
                img: process.env.PUBLIC_URL + '/assets/gmail.png',
                link: 'mailto:alichaabane98@gmail.com'
            },
        ],
        img:
            '/assets/my-image.jpg',
        imgPlaceholder:
            'data:image/jpeg;base64,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',
    }
};
export default content;
