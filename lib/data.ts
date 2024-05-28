import corpcommentImg from '@/public/corpcomment.png';
// import React from 'react';
// import { CgWorkAlt } from 'react-icons/cg';
// import { FaReact } from 'react-icons/fa';
// import { LuGraduationCap } from 'react-icons/lu';

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Testimonials',
		hash: '#testimonials',
	},
	// {
	// 	name: 'Experience',
	// 	hash: '#experience',
	// },
	// {
	// 	name: 'Contact',
	// 	hash: '#contact',
	// },
] as const;

const year = new Date().getFullYear();

export const experiencesData = [
	{
		title: 'Role One',
		location: 'Location',
		description: 'Lorem ipsum.',
		// icon: React.createElement(LuGraduationCap),
		date: year,
	},
	{
		title: 'Role Two',
		location: 'Location',
		description: 'Lorem ipsum.',
		// icon: React.createElement(CgWorkAlt),
		date: year,
	},
	{
		title: 'Role Three',
		location: 'Location',
		description: 'Lorem ipsum.',
		// icon: React.createElement(FaReact),
		date: year,
	},
] as const;

export const projectsData = [
	{
		title: 'Compassion Design System',
		description: 'Description.',
		tags: ['One', 'Two', 'Three'],
		imageUrl: corpcommentImg,
		imageAltText: 'Compassion Design System screenshot',
		projectPage: 'compassion-design-system',
	},
] as const;

export const skillsData = [
	'Design Systems',
	'UX Research',
	'Usability Testing',
	'Design Thinking',
	'Ideation',
	'Interaction Design',
	'Figma',
	'Wireframing',
	'Visual Design',
	'Prototyping',
	'Agile Methodologies',
	'Responsive Web Design',
	'A/B Testing',
	'Conversion Rate Optimization (CRO)',
	'Accessibility',
	'HTML5',
	'CSS',
	'SCSS',
	'JavaScript',
	'ReactJS',
	'Public Speaking',
] as const;
