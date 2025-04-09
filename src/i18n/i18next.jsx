import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import eləməmişdin
import translationAZ from '../../public/locales/az/translationAz.json';
import translationEN from '../../public/locales/en/translationEng.json';

// Burda resources yazmışam aşağıda init-in içində onu çağırmışam
const resources = {
	az: { translation: translationAZ },
	en: { translation: translationEN },
};

// i18n initialization
i18n
	.use(LanguageDetector) // Detects browser language
	.use(initReactI18next) // Passes i18n down to react-i18next
	.init({
		resources,
		fallbackLng: 'en', // Default language
		interpolation: {
			escapeValue: false, // React already escapes values
		},
		saveMissing: true, // Saves missing translations for future use
	});

export default i18n;
