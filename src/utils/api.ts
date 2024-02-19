interface SignIn {
  username: string;
  password: string;
}
interface SignUp {
  username: string;
  password: string;
  firstName: string;
  sex: string,
  age: number,
  country?: string,
  city?: string,
  hobby?: string,
}

export interface User {
  name: string;
  username: string;
}

class AuthApi {
  async _wait(ms: number) {
      return new Promise((res) => setTimeout(res, ms));
  }

  async signIn({ username, password }: SignIn): Promise<{ status: 'success'; data: User } | { status: 'error'; errorMessage: string }> {
    await this._wait(500);
    if (username && password) {
      if (password === '12345') {
        return { status: 'error', errorMessage: 'Invalid username or password' };
      }
      return { status: 'success', data: { username, password } };
    } else {
      return { status: 'error', errorMessage: 'Invalid username or password' };
    }
  }

  async signUp({ username, password, firstName, sex, age, country, city, hobby}: SignUp): Promise<{ status: 'success'; data: User } | { status: 'error'; errorMessage: string }> {
    await this._wait(500);
    if (username && password && firstName && sex && age) {
      if (username === 'fail') {
        return { status: 'error', errorMessage: 'Invalid username' };
      }
      return { status: 'success', data: { username, password, firstName, sex, age, country, city, hobby } };
    } else {
      return { status: 'error', errorMessage: 'Server Error' };
    }
  }
}

export const authApi = new AuthApi();
