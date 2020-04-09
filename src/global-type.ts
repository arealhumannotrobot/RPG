/**
 * format should be `${ISO 639}-${ISO 3166}`
 */
export type LocaleKey = "en-CA"|"zh-MO"|"zh-SG";
export type I18NSet = {
    [x:string]:{
        [y in LocaleKey]:string
    } 
}

//=====================//