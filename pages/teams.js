// TeamSection.js
import React from 'react';
import styles from './Team.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

const TeamMember = ({ name, role, image, socials }) => (
  <div className={styles.memberCard}>
    <div className={styles.imageWrapper}>
      <Image 
        src={image}
        alt={name}
        width={300}
        height={300}
        className={styles.memberImage}
      />
      <div className={styles.socialLinks}>
        {socials?.linkedin && (
          <Link href={socials.linkedin}>
            <FaLinkedin size={24} />
          </Link>
        )}
        {socials?.github && (
          <Link href={socials.github}>
            <FaGithub size={24} />
          </Link>
        )}
        {socials?.twitter && (
          <Link href={socials.twitter}>
            <FaTwitter size={24} />
          </Link>
        )}
        {socials?.facebook && (
          <Link href={socials.facebook}>
            <FaFacebook size={24} />
          </Link>
        )}
      </div>
    </div>
    <h3 className={styles.memberName}>{name}</h3>
    <p className={styles.memberRole}>{role}</p>
  </div>
);

const Teams = () => {
  const teamMembers = [
    {
      name: 'Njigouh Abdoulaye Razak',
      role: 'CTO & Founder',
      image: '/../public/assets/images/team/CTO2.png',
      socials: {
        linkedin: 'https://www.facebook.com/abdoulayeTheCTO',
        github: 'https://github.com/Abdoulaye-Thespy',
        twitter: 'https://x.com/AbdoulayeThe',
        facebook: 'https://www.facebook.com/abdoulayeTheCTO'
      }
    },
    {
      name: 'Alhadji Ali Garba',
      role: 'Développeur Frontend & Cloud',
      image: '/../public/assets/images/team/ALI2.png',
      socials: {
        linkedin: 'www.linkedin.com/in/alhadji-ali-garba-19a815243',
        github: 'https://github.com/AlhadjiAli',
        twitter: 'https://x.com/alhadjialig',
        facebook: 'https://www.facebook.com/ali.garba.1441/'
      }
    },
    
    {
      name: 'Vepouyoum Youssef',
      role: 'UI & UX Designer (Stagiaire)',
      image: '/../public/assets/images/team/Youssef.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/youssefvpm/',
        github: 'https://github.com/YoussefVpm',
        twitter: '#',
        facebook: 'https://www.facebook.com/share/19n85YehPu/?mibextid=wwXIfr'
      }
    },
    {
      name: 'MOULLAY MOHAMED ABDALLA',
      role: 'Développeur Cloud (Stagiaire)',
      image: '/../public/assets/images/team/MOULAYE.png',
      socials: {
        linkedin: '#',
        github: '#',
        twitter: '#',
        facebook: '#'
      }
    }
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.header}>
        <span className={styles.subtitle}>Membre d'Equipe</span>
        <h2 className={styles.title}>Notre Equipe Interne</h2>
      </div>
      <div className={styles.membersGrid}>
        {teamMembers.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
};

export default Teams;