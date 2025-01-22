import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Star, Trophy, Heart } from 'lucide-react';

const educationData = [
  {
    school: 'COMSATS University Islamabad',
    campus: 'Lahore Campus',
    degree: 'Bachelor of Science in Software Engineering',
    duration: 'January 2020 - February 2024',
    gpa: '3.56',
    achievements: [
      'Poised to receive the distinguished Campus Silver Medal for attaining the #2 ranking in batch',
      'Third Place – Devathon by Devsinc: Recognized as Rising Stars',
      'Hosted a workshop for university bus drivers alongside campus director',
      'Runner-up in convocation hosting auditions'
    ],
    image: 'images/comsats-logo.png'
  },
  {
    school: 'Abu Dhabi International School',
    degree: 'A Levels',
    duration: '2018 - 2020',
    subjects: [
      { name: 'Mathematics', grade: 'A' },
      { name: 'Physics', grade: 'B' },
      { name: 'Chemistry', grade: 'B' }
    ],
    achievements: [
      'Demonstrated strong analytical skills through advanced mathematics coursework',
      'Participated in school science exhibitions and physics competitions',
      'Member of the Mathematics Club, helping junior students with advanced topics'
    ],
    extracurricular: [
      'Active member of the school\'s Science Society',
      'Participated in inter-school academic competitions',
      'Organized peer tutoring sessions for O Level students'
    ],
    sports: {
      title: 'Athletic Achievements',
      activities: [
        {
          sport: 'Badminton',
          achievements: [
            'Member of the school\'s varsity badminton team',
            'Represented school in inter-school tournaments',
            'Regular participant in school\'s badminton training sessions'
          ]
        },
        {
          sport: 'Football',
          achievements: [
            'Active participant in school\'s football program',
            'Played in inter-class tournaments',
            'Regular participant in after-school football activities'
          ]
        }
      ]
    },
    image: 'https://upload.wikimedia.org/wikipedia/en/f/fd/The_official_logo_for_the_Abu_Dhabi_International_School.png'
  },
  {
    school: 'Abu Dhabi International School',
    degree: 'O Levels',
    duration: '2016 - 2018',
    achievements: [
      'Achieved 5 A/A* grades demonstrating academic excellence',
      'Secured outstanding results in core subjects'
    ],
    subjects: [
      { name: 'Mathematics', grade: 'A*' },
      { name: 'ICT', grade: 'A*' },
      { name: 'Physics', grade: 'A' },
      { name: 'Chemistry', grade: 'A' },
      { name: 'English', grade: 'A' },
      { name: 'Biology', grade: 'B' },
      { name: 'Urdu', grade: 'C' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/en/f/fd/The_official_logo_for_the_Abu_Dhabi_International_School.png',
    volunteerWork: {
      organization: 'Gulf Multi Sport',
      role: 'Event Volunteer',
      description: 'Actively supported various sporting events including triathlons',
      responsibilities: [
        'Assisted in event organization and coordination',
        'Supported athletes during triathlon events',
        'Helped maintain safety protocols during sporting events',
        'Contributed to successful execution of multiple sports competitions'
      ]
    }
  }
];

export const Education: React.FC = () => {
  return (
    <div className="py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-screen filter blur-[128px] animate-blob" />
        <div className="absolute -bottom-20 right-20 w-96 h-96 bg-cyan-500/30 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="inline-block p-3 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 
                          shadow-lg border border-gray-700/50 relative overflow-hidden">
              <BookOpen className="w-8 h-8 text-[#800020] relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#800020] to-purple-700 opacity-20 blur-xl" />
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Academic Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            A chronicle of educational excellence and extracurricular achievements
          </motion.p>
        </div>

        {/* Existing Education Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative max-w-6xl mx-auto space-y-12 z-10"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {/* Card with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-gray-900/90 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* School Logo */}
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-24 h-24 rounded-xl bg-white/10 p-2 flex items-center justify-center"
                    >
                      <img src={edu.image} alt={edu.school} className="w-20 h-20 object-contain" />
                    </motion.div>
                  </div>

                  {/* Education Details */}
                  <div className="flex-grow space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                        {edu.school}
                      </h3>
                      {edu.campus && (
                        <p className="text-gray-400 mt-1">{edu.campus}</p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-300">{edu.degree}</span>
                      </div>
                      {edu.gpa && (
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-400" />
                          <span className="text-gray-300">CGPA: {edu.gpa}</span>
                        </div>
                      )}
                    </div>

                    {/* Subjects or Achievements */}
                    {edu.subjects ? (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {edu.subjects.map((subject) => (
                          <span
                            key={subject.name}
                            className="px-3 py-1 bg-gray-800/50 rounded-lg text-sm text-gray-300 border border-gray-700/50"
                          >
                            {subject.name}: {subject.grade}
                          </span>
                        ))}
                      </div>
                    ) : (
                      edu.achievements && (
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-yellow-400" />
                            <span className="text-gray-200 font-medium">Achievements</span>
                          </div>
                          <ul className="list-disc list-inside space-y-1">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i} className="text-gray-400 text-sm">
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}

                    {edu.volunteerWork && (
                      <div className="mt-6 space-y-2">
                        <div className="flex items-center gap-2">
                          <Heart className="w-5 h-5 text-red-400" />
                          <span className="text-gray-200 font-medium">Volunteer Experience</span>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                          <h4 className="text-purple-400 font-medium">{edu.volunteerWork.organization}</h4>
                          <p className="text-gray-300 text-sm mt-1">{edu.volunteerWork.role}</p>
                          <p className="text-gray-400 text-sm mt-2">{edu.volunteerWork.description}</p>
                          <ul className="list-disc list-inside space-y-1 mt-2">
                            {edu.volunteerWork.responsibilities.map((resp, i) => (
                              <li key={i} className="text-gray-400 text-sm">
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {edu.sports && (
                      <div className="mt-6 space-y-2">
                        <div className="flex items-center gap-2">
                          <Trophy className="w-5 h-5 text-yellow-400" />
                          <span className="text-gray-200 font-medium">{edu.sports.title}</span>
                        </div>
                        <div className="space-y-4">
                          {edu.sports.activities.map((activity, index) => (
                            <div key={index} className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                              <h4 className="text-purple-400 font-medium">{activity.sport}</h4>
                              <ul className="list-disc list-inside space-y-1 mt-2">
                                {activity.achievements.map((achievement, i) => (
                                  <li key={i} className="text-gray-400 text-sm">
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education; 