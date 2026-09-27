// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Dramatcp';
export const SITE_DESCRIPTION =
	'從 Breaking 與當代舞即興領域出發的舞者。在旋轉、倒立、地板的動作裡，身體不斷改變面對世界的角度，試著把身體經驗，延伸成觀察與思考事物的方式，並從 Breaking 的框架中發展出屬於自己的身體詞彙。同時也是一名軟體工程師，於程式碼與地板之間、邏輯與肢體之間，尋找另一種語言。';
export const CONTACT_EMAIL = 'lawrence.fy.tsai@gmail.com';

// Prefixes a root-relative path with the configured base path (astro.config.mjs `base`),
// regardless of whether BASE_URL itself has a trailing slash.
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const cleanPath = path.replace(/^\//, '');
	return cleanPath ? `${base}/${cleanPath}` : `${base}/`;
}
