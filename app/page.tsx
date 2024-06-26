'use client';

import About from '@/components/about';
import Intro from '@/components/intro';
import KindWords from '@/components/kindWords';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

import styles from './page.module.css';

import { useEffect } from 'react';
import smartquotes from 'smartquotes-ts';

export default function Home() {
	useEffect(() => {
		smartquotes();
	}, []);

	return (
		<main className={styles.main}>
			<div className={styles.main__subhero}>
				<Intro />
				<About />
				<KindWords />
				<Projects />
				<Skills />
			</div>
		</main>
	);
}
