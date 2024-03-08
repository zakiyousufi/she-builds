import React from 'react';
import Team from './Team';
import Goles from '../../assets/images/goals.jpg';
import Plans from '../../assets/images/mission.jpg'

const About = () => {
  return (
    <div className='font-sans ml-80 my-8 flex justify-center flex-col items-center'>
      <h1 className='text-4xl font-bold'>About Us</h1>
      <p className='text-lg mr-10 my-4'>The Society of Afghan Women Engineers is dedicated to empowering and improving the role
        of women in engineering inside Afghanistan. Our goal is to create a supportive and inclusive
        community that will strengthen professional growth, skills development and leadership
        opportunities for Afghan women looking for work in engineering.
      </p>
        <div className='w-full flex justify-between'>
          <div className='w-2/3'>
            <h1 className='text-2xl font-bold mt-6 text-sky-500'>
              Our Vision
            </h1>
            <p className="mb-4">
              Our vision is to create a thriving community of Afghan female engineers who are catalysts
              for positive change in Afghanistan's engineering landscape. We anticipate a future in which
              every Afghan woman with a passion for engineering will have access to quality education,
              mentoring and resources. Society of Afghan Women Engineers aspires to be a driving force
              in promoting gender equality, innovation and sustainable development through active
              participation of women in all aspects of engineering.
            </p>
          </div>
          <img className='w-1/3 h-1/3 m-10' src={Goles} alt='SAWE' />
        </div>
        <div className='w-full'>
          <h2 className='text-2xl font-bold text-sky-500'>Our Goals</h2>
          <ol className="list-decimal pl-6">
            <li className="mb-2">Empowerment: Empowering Afghan female engineers through networking, mentoring, and access to resources that enhance their skills and knowledge.</li>
            <li className="mb-2">Education: Promoting educational initiatives, workshops, and educational programs to bridge the gender gap in engineering education and provide equal opportunities for women in this field.</li>
            <li className="mb-2">Professional development: Facilitates professional development, career progress, and leadership role in the engineering industry for Afghan women.</li>
            <li className="mb-2">Community building: Fostering a strong sense of community among women engineers by organizing events, conferences, and activities that facilitate cooperation and knowledge sharing.</li>
            <li className="mb-2">Support: Advocate for gender equality and inclusion of women in engineering professions, working to break down challenging barriers and stereotypes.</li>
            <li className="mb-2">Vision: To inspire the next generation of female engineers, by displaying their achievements, projects, and contributions. It increases the vision of Afghan female engineers.</li>
            <li className="mb-2">Cooperation: Working with industry partners, educational organizations, and government agencies to create a supportive ecosystem that recognizes and values women's contributions to engineering.</li>
            <li className="mb-2">Networking: Establishing a strong network of professionals to provide support and opportunities for Afghan female engineers at different stages of their careers.</li>
          </ol>
        </div>
        <div className='w-full flex justify-between pb-10 mb-10'>
          <img className='w-1/3 object-cover mt-10 mr-5' src={Plans} alt='SAWE' />
          <div className='w-2/3'>
            <h2 className="text-2xl font-bold mt-6 text-sky-500">Our Plans</h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">Creating free software courses (AutoCAD, Sketch-UP, Rivet, Photoshop, etc.)</li>
              <li className="mb-2">Create different workshops in any engineering field as needed</li>
              <li className="mb-2">Establishing a relationship with construction companies to create work opportunities</li>
              <li className="mb-2">Conducting educational programs such as leadership, research methodology, etc.</li>
              <li className="mb-2">Creating information programs on engineering scholarships</li>
              <li className="mb-2">Introducing and promoting Afghan Women engineers and their achievements.</li>
              <li className="mb-2">Establishing in-person and virtual meetings for more understanding between engineers and networking between them</li>
            </ul>
          </div>
        </div>
        <Team />
        <div className='w-full'>
          <h2 className="text-2xl font-bold mt-6 text-sky-500">Output of the Organization</h2>
          <p className="mb-4">
            The organization strives to have positive impacts on society with its programs and provide valuable services for women and girls engineers.
          </p>
          <p className="mb-4">
            By the end of the first year, SAWE aims to have:
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-2">Established a vibrant online community for women engineers.</li>
            <li className="mb-2">Facilitated networking opportunities and mentorship connections.</li>
            <li className="mb-2">Provided valuable skills development programs.</li>
            <li className="mb-2">Increased visibility and representation of women in engineering.</li>
          </ul>
        </div>
        <div className='w-full'>
          <h1 className="text-2xl font-bold mt-6 text-sky-500">Budget and Resources</h1>
          <p>
            At the beginning, we ask the professors and educational institutions to voluntarily help us in
            this great cause.
            To start this path, with the cooperation of those who want to share their knowledge and
            learning, we will strengthen the capacities of the members of this organization so that soon
            there will be a strong and expert group in this field, and the group with their skills and
            expertise can serve better and fruitful programs can be achieved.
          </p>
        </div>
      </div>
  );
}

export default About;
