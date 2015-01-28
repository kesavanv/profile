var experienceData = require('./experienceData');

var ResumeController = (function process() {
    
    var getResumeData = function getResumeData () {
        var tools = [{'toolName': 'HTML 5'},
                    {'toolName': 'CSS 3'},
                    {'toolName': 'jQuery'},
                    {'toolName': 'LESS'},
                    {'toolName': 'NodeJs'},
                    {'toolName': 'BackboneJs'},
                    {'toolName': 'KrakenJs'},
                    {'toolName': 'DustJs'},
                    {'toolName': 'Bootstrap'},
                    {'toolName': 'Git'},
                    {'toolName': 'Photoshop'},
                    {'toolName': 'Illustrator'}
            ],
            skills =[{'skillName': 'Usability', 'fluency': 80},
                    {'skillName': 'Design','fluency': 80},
                    {'skillName': 'HTML & CSS', 'fluency': 95},
                    {'skillName': 'JavaScript', 'fluency': 85}
            ],
            about = [{'qual': '10 years & 5 months of front-end, user-centered design experience'},
                    {'qual': 'Played key roles in User Interface engineering team and User Experience Design Team, participating in the complete Product Development Life Cycle of several successfully launched web and desktop applications'},
                    {'qual': 'Expertise in hand coding valid XHTML and CSS with Cross browser compatibility and improved Accessibility'},
                    {'qual': 'Great passion in Web Standards, Usability and Accessibility'},
                    {'qual': 'Productive in fast-paced, deadline-driven environments'}
            ];
        return {
                'profile': {
                    'name': 'Kesavan Varatharajan',
                    'role': 'Web developer',
                    'photoUrl': 'https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-frc3/s720x720/376733_2431468020669_1260019199_n.jpg',
                    'about': about,
                    'skills': skills,
                    'tools': tools,
                    'experience': experienceData
                }
            };
    };

    var displayResume = function displayResume (req, res) {
        res.render('resume', getResumeData());
    };

    return {
        displayResume: displayResume
    };
})();

module.exports = ResumeController;