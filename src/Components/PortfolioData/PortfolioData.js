const data = {
  photos: [
    require("../../assets/39920006_10212983652289352_4095213027102556160_o.jpg"),
    require("../../assets/34635621_10212476639694354_7780732272050700288_n (2).jpg"),
    require("../../assets/34117643_10212433357172318_7572579435124097024_n.jpg"),

    require("../../assets/40403719_10213026852449329_5886796151444733952_n.jpg"),
    require("../../assets/19620521_10209987102697485_5226421796081044663_o.jpg")
  ],
  projects: [
    {
      title: "Sick-Fits",
      subTitle: "A Clothing Reseller With Full Checkout and Payment Processing",
      path: require("../../assets/favicon.png"),
      link: "https://github.com/matthewmahler/sick-fits",
      techList: [
        "Bcrypt.js",
        "Cookie Parser",
        "Graphql",
        "Graphql CLI",
        "Graphql Yoga",
        "Graphql Tag",
        "JSON Web Tokens",
        "Nodemailer",
        "Nodemon",
        "Prisma",
        "Stripe",
        "Apollo client",
        "Downshift",
        "Enzyme",
        "Lodash Debounce",
        "Next.js",
        "React.js",
        "React Apollo",
        "Styled Components"
      ],
      description:
        "A full stack online clothing store complete with real credit checkout. Users can search, sell, add to cart and checkout their favourite items. The application has five main models, Users, Items, Orders, CartItems, and OrderItems, all of which are relational and showcase the power of relational GraphQL Queries. The app also includes many server side bits including JWT authentication, permissions, sending emails, uploading images, and charging credit cards."
    },
    {
      title: "Overlynics",
      subTitle: "A Statistical Tracker for Blizzard's Overwatch",
      path: require("../../assets/Overwatch_circle_logo.svg.ce34116f.png"),
      link: "https://github.com/matthewmahler/Overlynics",
      techList: [
        "Axios",
        "Bcrypt-Nodejs",
        "Body-Parser",
        "Dotenv",
        "Express.js",
        "Mongoose",
        "Passport.js",
        "React-Vis",
        "Nodemon",
        "React.js",
        "JSX",
        "HTML5",
        "CSS3",
        "Node.js",
        "MongoDB"
      ],
      description:
        "This application allowed players of the game to track win/loss trends across multiple matches along with map win percentages, these were then compiled on a season and overall scope. Unfortunately Blizzard banned third party apps so the project was discontinued."
    },
    {
      title: "Slotify",
      subTitle: "A Spotify Clone",
      path: require("../../assets/icons8_Play_Button_Circled_100px.png"),
      link: "https://github.com/matthewmahler/spotify-clone",
      techList: [
        "PhP",
        "MySQL",
        "jQuery",
        "AJAX",
        "Xampp",
        "Apache",
        "HTML5",
        "CSS3"
      ],
      description:
        "A proof of concept music streaming service style as a spotify clone. Utilizing the HTML5 audio browser API and MySQL with PhP for database communication. This project's purpose was to prepare for a completely new music streaming application."
    },

    {
      title: "This Portfolio",
      subTitle: "A Responsive React Portfolio",
      path: require("../../assets/you-are-here.png"),
      link: "https://github.com/matthewmahler/portfolio-new",
      techList: ["React.js", "CSS Modules", "HTML5", "JSX", "Reactstrap"],
      description:
        "Hey you're here! This portfolio  was built with Create React App, CSS Modules for styling, Reactstrap for templating and a whole lot of love <3"
    }
  ]
};

export default data;
