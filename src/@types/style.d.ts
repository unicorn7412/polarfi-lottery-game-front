declare interface TextAttributeType {
	fsize?:		string
	weight?:	number | string
	tAlign?:	'center' | 'right' | 'left' | 'initial' | 'inherit'
	tStyle?:	'uppercase' | 'lowercase' | 'capitalize'
	color?:		string
}

declare interface TextStyledType extends TextAttributeType {
	sMobile?:	TextAttributeType
	mMobile?:	TextAttributeType
	lMobile?:	TextAttributeType
	tablet?:	TextAttributeType
	laptop?:	TextAttributeType
	laptopL?:	TextAttributeType
}

declare interface ElementAttributeType {
	fill?:		string
	m?:			string
	mx?:		string
	my?:		string
	mt?:		string
	mr?:		string
	mb?:		string
	ml?:		string
	p?:			string
	px?:		string
	py?:		string
	pt?:		string
	pr?:		string
	pb?:		string
	pl?:		string
	w?:			string
	h?:			string
	minw?:		string
	minh?:		string
	maxw?:		string
	maxh?:		string
}

declare interface ElementStyledType extends ElementAttributeType {
	// sMobile?:	ElementAttributeType
	// mMobile?:	ElementAttributeType
	// lMobile?:	ElementAttributeType
	// tablet?:	ElementAttributeType
	// laptop?:	ElementAttributeType
	// laptopL?:	ElementAttributeType
}

declare interface FlexAttributeType {
	wrap?:		'wrap' | 'nowrap'
	direct?:	string
	vAlign?:	string
	hAlign?:	string
	gap?:		string
	gapX?:		string
	gapY?:		string
	count?:		number
}

declare interface FlexStyledType extends FlexAttributeType {
	sMobile?:	FlexAttributeType
	mMobile?:	FlexAttributeType
	lMobile?:	FlexAttributeType
	tablet?:	FlexAttributeType
	laptop?:	FlexAttributeType
	laptopL?:	FlexAttributeType
}

declare interface ImageAttributeType {
	width?:		string
	height?:	string
}

declare interface ImageStyledType extends ImageAttributeType {
	sMobile?:	ImageAttributeType
	mMobile?:	ImageAttributeType
	lMobile?:	ImageAttributeType
	tablet?:	ImageAttributeType
	laptop?:	ImageAttributeType
	laptopL?:	ImageAttributeType
}