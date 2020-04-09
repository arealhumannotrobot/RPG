import { I18NSet, LocaleKey } from "../global-type";
import { I18N_SET } from "../param/i18nSet";

/**Resolve I18N. See `src/param/i18nSet.ts` for global I18N set
 * 
 * @param strKey the key inside the i18nSet
 * @param locale what language should this function pick? Default English
 * @param i18nSet if provided, resolve i18n in this set. Otherwise, resolve i18n with global set
 */
export const i18nRes = (strKey:string, locale: LocaleKey='en-CA', i18nSet:I18NSet=I18N_SET) => {
    return !!i18nSet[strKey][locale]?i18nSet[strKey][locale]:strKey
}