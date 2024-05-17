import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Offensive Security Experienced Pentester (OSEP)',
    'Offensive Security Web Expert (OSWE)',
    'Offensive Security Certified Professional (OSCP)',
    'Certified Red Team Professional (CRTP)',
    'CREST Registered Penetration Tester (CRT)',
    'CREST Practitioner Security Analyst (CPSA)',
    'Gremlin Certified Chaos Engineering Practitioner - GCCEP',
    'Certified Ethical Hacker (Master)',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I'm a 24-year-old security researcher whose passion for cybersecurity ignited at 14
              while watching Hollywood thrillers. By 18, I was diving into bug bounty programs,
              quickly earning spots in the halls of fame for Apple, Microsoft, Intel, and Avira. I
              was also recognized as one of Oppo’s top 10 security researchers.
            </p>

            <p>
              Fast forward to today, I’m a Product Security Engineer at{' '}
              <a href="https://salesforce.com/">Salesforce</a>, backed by over three years of
              industry experience and a Master’s degree in{' '}
              <a href="https://www.cmu.edu/ini/index.html/">Information Security</a>, from Carnegie
              Mellon University. My journey includes pivotal roles as a Cloud Security Researcher at{' '}
              <a href="https://cmu.edu/">Carnegie Mellon</a>, Research Associate at{' '}
              <a href="https://www.adobe.com/">Adobe</a>, and Security Analyst at{' '}
              <a href="https://www.mpl.us/">Mobile Premier League</a>, Asia's largest e-sports
              gaming platform.
            </p>

            <p>
              As the head of the OWASP Chapter for over 3 years, I have discovered and authored{' '}
              <a href="https://www.exploit-db.com/?author=9842">exploits </a> for several zero-day
              vulnerabilities affecting millions of devices worldwide.
            </p>

            <p>I hold several prestigious certifications, including:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
