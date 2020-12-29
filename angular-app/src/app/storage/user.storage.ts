import { decrypt, encrypt } from '../helpers/crypto';

export function UserStorage() {
  return (target: any, key: string) => {
    const itemKey = 'user';

    Object.defineProperty(target, key, {
      get: () => {
        const user = localStorage.getItem(itemKey);

        if (user) {
          return JSON.parse(decrypt(user));
        }

        return null;
      },
      set: (token: string) => {
        localStorage.setItem(itemKey, encrypt(JSON.stringify(token)));
      }
    });
  };
}