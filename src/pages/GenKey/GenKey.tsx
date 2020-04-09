import React from 'react';
import './GenKey.css';
import { LocaleKey } from '../../global-type';
import { i18nRes } from '../../helpers/i18n';
import { I18N_SET } from '../../param/i18nSet';


type GenKeyProp = {
    locale: LocaleKey,
}
const GenKey: React.FC<GenKeyProp> = (props) => {
    return (
        <div className="GenKey">
            <input placeholder={`Alias`} type="text" name="genkey-alias" id="genkey-alias" />
            <input placeholder="Email" type="email" name="genkey-email" id="genkey-email" />
            <input placeholder="" type="password" name="genkey-password" id="genkey-password" />
            <input placeholder="" type="password" name="genkey-passconfirm" id="genkey-passconfirm" />
            <select name="genkey-crypt-type" id="genkey-crypt-type">
                <option value="rsa3072">RSA 3072</option>
                <option value="rsa4096">RSA 4096</option>
                <option value="ed25519">ED 25519</option>
            </select>
            <button>{"Generate"}</button>
            <textarea name="genkey-pubkey" id="genkey-pubkey" cols={30} rows={10} placeholder="Public Key"></textarea>
            <textarea name="genkey-pvtkey" id="genkey-pvtkey" cols={30} rows={10} placeholder="Private Key"></textarea>
            <button>{"Generate"}</button>
        </div>
    );
}

export default GenKey;
