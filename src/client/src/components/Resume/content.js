export default {
  name: 'Yi Fan',
  profession: 'Applied Scientist',
  profile: require('./content/profile.jpg'),
  contact: [
    {
      name: 'cell',
      icon: 'mdi-contact-phone',
      logo: '',
      info: '(404) XXX-XXXX',
      href: '',
    },
    {
      name: 'email',
      icon: 'mdi-email',
      logo: '',
      info: 'fanyi0926@gmail.com', 
      href: '',
    },
    {
      name: 'address',
      icon: 'mdi-map',
      logo: '',
      info: 'The Spheres, Seattle, WA 98121',
      href: '',
    },
    {
      name: 'github',
      // icon: '',
      icon: 'mdi-github-box',
      // logo: require('./content/logo-github-dark.png'),
      logo: '',
      info: 'https://github.com/yifanStat',
      href: 'https://github.com/yifanStat',
    },
    {
      name: 'linkedin',
      // icon: '',
      icon: 'mdi-linkedin',
      // logo: require('./content/logo-linkedin-dark.png'),
      logo: '',
      info: `Yi's Linkedin Profile Page`, 
      href: 'https://www.linkedin.com/in/yi-fan-501a8b25/',
    },
  ],
  specialities: [
    {
      name: 'Machine Learning',
      skills: [
        {
          name: 'main',
          icon: 'mdi-alert-circle-outline',
          logo: '',
          href: '',
          info: 'Anomaly Detection,'
        },
        {
          name: 'main',
          icon: 'mdi-chart-bell-curve-cumulative',
          logo: '',
          href: '',
          info: 'Linear Regression, Logistic Regression, SVM,'
        },
        {
          name: 'main',
          icon: 'mdi-palm-tree',
          logo: '',
          href: '',
          info: 'Random Forest, Gradient Boosting Tree, XGBoost'
        }
      ]
    },
    {
      name: 'Deep Learning',
      skills: [
        {
          name: 'main',
          icon: 'mdi-battlenet',
          logo: '',
          href: '',
          info: 'Deep Neural Network, Graph Neural Network, Graph Modeling',
        },
      ]
    },
    {
      name: 'Programming Language',
      skills: [
        {
          name: 'Python',
          icon: 'mdi-language-python',
          // logo: require('./content/language-python.png'),
          logo: '',
          info: 'Python',
          href: '',
          rate: 5,
        },
        {
          name: 'R',
          icon: 'mdi-language-r',
          // logo: require('./content/language-r.png'),
          logo: '',
          info: 'R',
          href: '',
          rate: 5,
        },
        {
          name: 'SQL',
          icon: 'mdi-database',
          logo: '',
          info: 'SQL',
          href: '',
          rate: 5,
        },
        {
          name: 'Bash',
          icon: 'mdi-console-network',
          logo: '',
          info: 'Bash',
          href: '',
          rate: 4,
        },
        {
          name: 'C++',
          icon: 'mdi-language-cpp',
          // logo: require('./content/language-cpp.png'),
          logo: '',
          info: 'C++',
          href: '',
          rate: 2,
        }
      ]
    }
  ],
  headline: [
    {
      name: 'Management and Administration',
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
      dolore magna aliqua. Volutpat consequat mauris nunc congue nisi vitae. Morbi tristique senectus et netus et 
      malesuada fames ac. Tincidunt dui ut ornare lectus sit amet est. Ornare suspendisse sed nisi lacus sed.`,
    },
    {
      name: 'Communication and Collaboration',
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
      dolore magna aliqua. Volutpat consequat mauris nunc congue nisi vitae. Morbi tristique senectus et netus et 
      malesuada fames ac. Tincidunt dui ut ornare lectus sit amet est. Ornare suspendisse sed nisi lacus sed.`,
    }
  ],
  education: [
    {
      name: 'Rutgers University',
      degree: 'Ph.D., Statistics and Biostatistics, GPA: 3.98/4.00',
      advisor: 'Regina Y. Liu',
      span: 'Sep. 2011 - May. 2016',
      logo: require('./content/university-rutgers.png'),
      info: `Thesis: New nonparametric approaches for multivariate and functional data analysis in outlier detection, 
        construction of tolerance tubes, and clustering.`,
    },
    {
      name: 'Renmin University of China, Beijing, CHINA',
      degree: 'B.S., Statistics, GPA: 3.85/4.00',
      advisor: '',
      span: 'Sep. 2007 - Jul. 2011',
      logo: require('./content/university-remin.png'),
      info: '',
    },
  ],
  experience: [
    {
      name: 'Amazon',
      icon: 'mdi-amazon',
      span: 'Oct. 2017 - Present',
      work: [
        {
          title: 'Senior Machine Learning Scientist',
          area: 'Seattle, WA',
          span: 'Oct. 2017 - Present',
          info: `
            - Built Machine Learning models to detect fraudulent online transactions, including Gradient Boosting Tree, 
            Random Forest, Support Vector Machine, and Deep Neural Network.
            <br>
            - Proposed a Graph Neural Network model based on local relational subgraphs to predict abnormal account 
            activities and embed the attention mechanism to automatically adjust the impact from different types of
            linkages.
            - Led the risk model development on a global bipartite graph with billions of nodes to predict the risk 
            associated with sign-in events.
          `,
        },
      ],
    },
    {
      name: 'J.P. Morgan',
      icon: 'mdi-bank',
      span: 'Oct. 2015 - Oct. 2017',
      work: [
        {
          title: 'Quantitative Analyst',
          span: 'Oct. 2015 - Oct. 2017',
          area: 'New York City, NY',
          info: `
            - Led the development of credit loss simulation framework via Monte Carlo methods.
            <br>
            - Built predictive models to forecast credit risk of various financial products including Mortgage, 
            MBS, Credit Cards, etc.
          `,
        },
      ],
    },
    {
      name: 'Federal Aviation Administration',
      icon: 'mdi-airplane-takeoff',
      span: 'Aug. 2012 - Jul. 2015',
      work: [
        {
          title: 'Senior Research Scientist',
          span: 'Aug. 2014 - May. 2015',
          area: 'New Brunswick, NJ',
          info: `- Developed Antipodal Reflection Depth approach to detect risky performance during aircraft landing 
            operations.`,
        },
        {
          title: 'Research Scientist',
          span: 'Aug. 2012 - Jul. 2014',
          area: 'New Brunswick, NJ',
          info: `- Developed KMPD, an efficient clustering approach for functional data (or spatial data), to detect 
            different aircraft landing patterns.
            <br>
            - Constructed tolerance bands, a powerful tool of continuous monitoring of time series data, to perform 
            dynamic safety check to assist aircraft safe landing.`,
        },
      ],
    },
  ],
  certificates: [
    {
      name: 'Financial Risk Manager (FRM)',
      institute: 'Global Associate of Risk Professionals (GARP)',
      span: 'Issued Mar. 2015 - No Expiration Date',
      logo: require('./content/certificate-frm.png'),
      href: 'http://my.garp.org/DigitalBadgeFRM?id=0034000001aeDQvAAM',
    },
    {
      name: 'Charted Financial Analyst (CFA) Charterholder',
      institute: 'CFA Institute',
      span: 'Issued Mar. 2015 - Expired Oct. 2015',
      logo: require('./content/certificate-cfa.png'),
      href: '',
    },
  ],
  awards: [
    {
      name: 'Nonparametric Tolerance Tubes for Functional Data',
      srcs: 'Conference of the International Society for Nonparametric Statistics (ISNPS)',
      span: 'Invited Talk, 2016',
      icon: 'mdi-teach',
      color: 'red',
    },
    {
      name: `Antipodal Reflection Depth and Its Application to Nonparametric<br> Outlier Detection in Multivariate and Functional Data`,
      srcs: 'Joint Statistical Meetings (JSM)',
      span: 'Invited Talk, 2017',
      icon: 'mdi-text-to-speech',
      color: 'orange',
    },
    {
      name: 'Best Poster Awards',
      srcs: 'Deming Conference of Applied Statistics',
      span: 'Jun. 2015',
      icon: 'mdi-book-multiple',
      color: 'yellow',
    },
    {
      name: 'Best Performance in Qualification Exam,',
      srcs: 'Rutgeres University, Department of Statistics and Biostatistics',
      span: 'Jun. 2012',
      icon: 'mdi-library-books',
      color: 'green',
    },
  ],
  publications: [
    {
      title: 'A Super Fantastic Paper title - Lorem ipsum dolor sit amet.',
      author: '<strong>Yi Fan</strong>, Regina Y. Liu',
      journal: 'The Annals of Statistics',
      volume: '42',
      number: '4',
      pages: '314-323',
      year: '2019',
      publisher: 'Great Publisher',
      icon: 'mdi-buffer',
      color: 'red',
    },
    {
      title: 'New nonparametric approaches for multivariate and functional data analysis in outlier detection, construction of tolerance tubes, and clustering.',
      author: '<strong>Yi Fan</strong>',
      journal: 'Ph.D. Thesis',
      volume: '1',
      number: '0',
      pages: '1-98',
      year: '2016',
      publisher: 'Rutgers, The State University of New Jersey',
      icon: 'mdi-book-open-page-variant',
      color: 'red',
    },
  ],
}