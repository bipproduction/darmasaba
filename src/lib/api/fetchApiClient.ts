export const fetchApiClient = {
  host: "",
  init(host: string) {
    this.host = host;
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/user/logout/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/user/logout/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async userLogout({
    searchParams,
    token,
  }: {
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    return fetch(`${this.host}/api/user/logout${searchParams || ""}`, {
      method: "GET",
      headers,
    });
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/user/get/token/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/user/get/token/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async userGetToken({
    searchParams,
    token,
  }: {
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    return fetch(`${this.host}/api/user/get/token${searchParams || ""}`, {
      method: "GET",
      headers,
    });
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/test/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/test/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async test({
    searchParams,
    token,
  }: {
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    return fetch(`${this.host}/api/test${searchParams || ""}`, {
      method: "GET",
      headers,
    });
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/otp/send/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/otp/send/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async otpSend({
    body,
    searchParams,
    token,
  }: {
    body?: string;
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    return fetch(`${this.host}/api/otp/send${searchParams || ""}`, {
      method: "POST",
      headers,
      body,
    });
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/otp/compare/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/otp/compare/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async otpCompare({
    body,
    searchParams,
    token,
  }: {
    body?: string;
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    return fetch(`${this.host}/api/otp/compare${searchParams || ""}`, {
      method: "POST",
      headers,
      body,
    });
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/user/list/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/user/list/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async developerUserList({
    searchParams,
    token,
  }: {
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    return fetch(`${this.host}/api/developer/user/list${searchParams || ""}`, {
      method: "GET",
      headers,
    });
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/desa/list/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/developer/desa/list/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async developerDesaList({
    searchParams,
    token,
  }: {
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    return fetch(`${this.host}/api/developer/desa/list${searchParams || ""}`, {
      method: "GET",
      headers,
    });
  },

  /**
   * [/Users/bip/Documents/projects/bip/darmasaba/src/app/api/dashboard/get-user/route.ts](file:///Users/bip/Documents/projects/bip/darmasaba/src/app/api/dashboard/get-user/route.ts)
   * @param {string} searchParams ?key=value
   * @param {string} token Optional authorization token
   */
  async dashboardGetUser({
    searchParams,
    token,
  }: {
    searchParams?: string;
    token?: string;
  }) {
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};
    return fetch(`${this.host}/api/dashboard/get-user${searchParams || ""}`, {
      method: "GET",
      headers,
    });
  },
  paths() {
    return {
      userLogout: `${this.host}/api/user/logout/`,
      userGetToken: `${this.host}/api/user/get/token/`,
      test: `${this.host}/api/test/`,
      otpSend: `${this.host}/api/otp/send/`,
      otpCompare: `${this.host}/api/otp/compare/`,
      developerUserList: `${this.host}/api/developer/user/list/`,
      developerDesaList: `${this.host}/api/developer/desa/list/`,
      dashboardGetUser: `${this.host}/api/dashboard/get-user/`,
    };
  },
};
