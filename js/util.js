const createLayoutComponents = () => {
	const createSectionEl = () => {
		const sectionEl = document.createElement('section');
		sectionEl.className = 'section';

		/* section head */
		const sectionHeadEl = document.createElement('div');
		sectionHeadEl.className = 'section__head';

		const cardsSummaryEl = document.createElement('div');
		cardsSummaryEl.className = 'cards-summary';

		const cardsSummarySubtitleEl = document.createElement('p');
		cardsSummarySubtitleEl.className = 'cards-summary__subtitle';
		cardsSummarySubtitleEl.textContent = 'Reliable, efficient delivery';

		const cardsSummaryTitleEl = document.createElement('h2');
		cardsSummaryTitleEl.className = 'cards-summary__title';

		const cardsSummaryTitleTextEl = document.createElement('strong');
		cardsSummaryTitleTextEl.textContent = 'Powered by Technology';

		cardsSummaryTitleEl.appendChild(cardsSummaryTitleTextEl);

		const cardsSummaryDescEl = document.createElement('p');
		cardsSummaryDescEl.className = 'cards-summary__desc';
		cardsSummaryDescEl.textContent =
			'Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful';

		cardsSummaryEl.appendChild(cardsSummarySubtitleEl);
		cardsSummaryEl.appendChild(cardsSummaryTitleEl);
		cardsSummaryEl.appendChild(cardsSummaryDescEl);

		sectionHeadEl.appendChild(cardsSummaryEl);

		/* section body */
		const sectionBodyEl = document.createElement('div');
		sectionBodyEl.className = 'section__body';

		const cardListEl = document.createElement('div');
		cardListEl.className = 'cards';

		const cardBlocks = [
			{
				items: [
					{
						id: 'supervisor',
						title: 'Supervisor',
						description:
							'Monitors activity to identify project roadblocks',
						imageUrl: './images/icons/supervisor.svg',
					},
				],
			},
			{
				items: [
					{
						id: 'team-builder',
						title: 'Team Builder',
						description:
							'Scans our talent network to create the optimal team for your project',
						imageUrl: './images/icons/team-builder.svg',
					},
					{
						id: 'karma',
						title: 'Karma',
						description:
							'Regularly evaluates our talent to ensure quality',
						imageUrl: './images/icons/karma.svg',
					},
				],
			},
			{
				items: [
					{
						id: 'calculator',
						title: 'Calculator',
						description:
							'Uses data from past projects to provide better delivery estimates',
						imageUrl: './images/icons/calculator.svg',
					},
				],
			},
		];

		for (const cardBlock of cardBlocks) {
			const cardBlockEl = document.createElement('div');
			cardBlockEl.className = 'cards__block';

			for (const item of cardBlock.items) {
				const cardItemEl = document.createElement('div');
				cardItemEl.className = `card card--${item.id}`;

				const cardItemTitleEl = document.createElement('h3');
				cardItemTitleEl.className = 'card__title';
				cardItemTitleEl.textContent = item.title;

				const cardItemDescriptionEl = document.createElement('p');
				cardItemDescriptionEl.className = 'card__desc';
				cardItemDescriptionEl.textContent = item.description;

				const cardItemImageWrapperEl = document.createElement('div');
				cardItemImageWrapperEl.className = 'card__image';

				const cardItemImageEl = document.createElement('img');
				cardItemImageEl.width = 64;
				cardItemImageEl.height = 64;
				cardItemImageEl.src = item.imageUrl;
				cardItemImageEl.alt = '';

				cardItemImageWrapperEl.appendChild(cardItemImageEl);

				cardItemEl.appendChild(cardItemTitleEl);
				cardItemEl.appendChild(cardItemDescriptionEl);
				cardItemEl.appendChild(cardItemImageWrapperEl);

				cardBlockEl.appendChild(cardItemEl);
			}

			cardListEl.appendChild(cardBlockEl);
		}

		sectionBodyEl.appendChild(cardListEl);

		sectionEl.appendChild(sectionHeadEl);
		sectionEl.appendChild(sectionBodyEl);

		return sectionEl;
	};

	/* header */
	const headerEl = document.createElement('header');

	const headerTitleEl = document.createElement('h1');
	headerTitleEl.className = 'sr-only';
	headerTitleEl.textContent = 'Four card feature section';

	headerEl.appendChild(headerTitleEl);

	/* main */
	const mainEl = document.createElement('main');

	const mainContainerEl = document.createElement('div');
	mainContainerEl.className = 'container';

	const sectionEl = createSectionEl();

	mainContainerEl.appendChild(sectionEl);

	mainEl.appendChild(mainContainerEl);

	/* footer */
	const footerEl = document.createElement('footer');

	const footerContainerEl = document.createElement('div');
	footerContainerEl.className = 'container';

	const footerTextEl = document.createElement('p');
	footerTextEl.textContent = 'Challenge by ';

	const footerTextLinkCreatorEl = document.createElement('a');
	footerTextLinkCreatorEl.href =
		'https://www.frontendmentor.io?ref=challenge';
	footerTextLinkCreatorEl.className = 'btn btn--link';
	footerTextLinkCreatorEl.textContent = 'Frontend Mentor';
	footerTextLinkCreatorEl.rel = 'noopener';
	footerTextLinkCreatorEl.target = '_blank';

	const footerTextLinkCoderEl = document.createElement('a');
	footerTextLinkCoderEl.href = 'https://github.com/al3xback';
	footerTextLinkCoderEl.className = 'btn btn--link';
	footerTextLinkCoderEl.textContent = 'al3xback';
	footerTextLinkCoderEl.rel = 'noopener';
	footerTextLinkCoderEl.target = '_blank';

	footerTextEl.appendChild(footerTextLinkCreatorEl);
	footerTextEl.append('. Coded by ');
	footerTextEl.appendChild(footerTextLinkCoderEl);

	footerContainerEl.appendChild(footerTextEl);

	footerEl.appendChild(footerContainerEl);

	return {
		headerEl,
		sectionEl,
		mainEl,
		footerEl,
	};
};

export default createLayoutComponents;
